import { mapData } from "../visualization_param/map_params";


export function readMapData(api_res, type) {
    var locations = [],
        mapValues = [],
        location_code = [],
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
        } else {
            for (const Da of timel.followers_split.followerCountsByRegion) {

                if (Da.regionText) {
                    location_code.push(Da.region)
                    locations.push(Da.regionText.split(",")[0].replace(/Greater|Area|Metro|politan|City|Metropolitan/g, "").trim())
                    mapValues.push(Da.followerCounts.organicFollowerCount)
                }
            }
        }
    }
    console.log(locations)
    values.push(mapData(location_code, locations, mapValues, type))
    return values
}