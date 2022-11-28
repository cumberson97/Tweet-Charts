import { mapData, mapDataScatterGeo } from "../visualization_param/map_params";
import { loadRegionLocationData } from "./cityGeoLocationData";




async function setCoordinates(locations, mapValues, lat, lng, country) {
    var cord = await loadRegionLocationData(),
        dex, i = 0;
    const arr = [...locations];
    //console.table(locations)

    for (const loc of arr) {


        if (cord.has(country[i]) && cord.get(country[i]).has(loc)) {
            // console.log(loc, " ", cord.get(loc).lat, cord.get(loc).lng)
            lat.push(cord.get(country[i]).get(loc).lat)
            lng.push(cord.get(country[i]).get(loc).lng)

        } else {

            dex = locations.indexOf(loc)
            console.log(loc, country[i])
            if (dex > -1) {
                /*  console.log(`Removing ${loc}    ${dex}`) */
                locations.splice(dex, 1)
                mapValues.splice(dex, 1)
            }
        }

        i++;

    }


    return [locations, mapValues, lat, lng]

}



export async function readMapData(api_res, type) {
    var locations = [],
        mapValues = [],
        location_code = [],
        lat = [],
        lng = [],
        country = [],
        temp,
        values = [];


    const _timeline = api_res.stats.linkedin.timelineStats.organisationFollowersLifetime
    for (const timel of _timeline) {
        if (type.toLowerCase() === "country") {
            for (const Da of timel.followers_split.followerCountsByCountry) {

                if (Da.countryText) {
                    location_code.push(Da.country)
                    locations.push(Da.countryText)
                    mapValues.push(Da.followerCounts.organicFollowerCount)
                }
            }
            values.push(mapData(location_code, locations, mapValues, type))
        } else {

            for (const Da of timel.followers_split.followerCountsByRegion) {

                if (Da.regionText) {

                    temp = Da.regionText.split(",");

                    if (temp.length > 1) {

                        location_code.push(Da.region)
                        country.push(temp[1].trim())
                        locations.push(temp[0].replace(/Greater|Area|Metro|politan|City|Metropolitan/g, "").trim())
                        mapValues.push(Da.followerCounts.organicFollowerCount)
                    }
                }
            }
            [locations, mapValues, lat, lng] = await setCoordinates(locations, mapValues, lat, lng, country);
            console.log(locations, lat)

            values.push(mapDataScatterGeo(locations, mapValues, lat, lng))
        }
    }

    return values
}