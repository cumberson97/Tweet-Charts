import { mapData, mapDataScatterGeo } from "../visualization_param/map_params";
import { loadRegionLocationData } from "./test";




async function setCoordinates(locations, mapValues, lat, lng) {
    var cord = await loadRegionLocationData(),
        dex, test = 0;
    const arr = [...locations];
    //console.table(locations)

    for (const loc of arr) {
        test++;

        if (cord.has(loc)) {
            // console.log(loc, " ", cord.get(loc).lat, cord.get(loc).lng)
            lat.push(cord.get(loc).lat)
            lng.push(cord.get(loc).lng)

        } else {

            dex = locations.indexOf(loc)

            if (dex > -1) {
                /*  console.log(`Removing ${loc}    ${dex}`) */
                locations.splice(dex, 1)
                mapValues.splice(dex, 1)
            }
        }

    }


    return [locations, mapValues, lat, lng]

}



export async function readMapData(api_res, type) {
    var locations = [],
        mapValues = [],
        location_code = [],
        lat = [],
        lng = [],
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
                    location_code.push(Da.region)
                    locations.push(Da.regionText.split(",")[0].replace(/Greater|Area|Metro|politan|City|Metropolitan/g, "").trim())
                    mapValues.push(Da.followerCounts.organicFollowerCount)
                }
            }
            [locations, mapValues, lat, lng] = await setCoordinates(locations, mapValues, lat, lng);
            console.log(locations, lat)

            values.push(mapDataScatterGeo(locations, mapValues, lat, lng))
        }
    }

    return values
}