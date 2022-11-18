import { mapData } from "../visualization_param/map_params";


export function readMapData(api_res) {
    var locations = [],
        mapValues = [],
        values = [];

    const twitter_timeline = api_res.stats.linkedin.timelineStats.organisationFollowersLifetime
    for (const timel of twitter_timeline) {
        for (const Da of timel.followers_split.followerCountsByCountry) {
            if (Da.countryText) {
                locations.push(Da.countryText)
                mapValues.push(Da.followerCounts.organicFollowerCount)
            }
        }
    }

    values.push(mapData(locations, mapValues))
    return values
}