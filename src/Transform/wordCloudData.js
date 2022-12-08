import data from "../twitter_hahstags_data.json"





export function worldCloudData() {
    var timeline = data.stats.twitter.timelineStats.timeline
    var values = []

    for (var key in timeline[0].hashtags) {
        values.push({
            text: key,
            value: timeline[0].hashtags[key]
        })
    }

    console.log(values)
    return values
}