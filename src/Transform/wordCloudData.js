import data from "../twitter_hahstags_data.json"
import data2 from "../twitter_hahstags_entities.json"





export function worldCloudData() {
    var timeline = data.stats.twitter.timelineStats.timeline
    var timeline2 = data2.stats.twitter.timelineStats.timeline
    var values = []
    var values_2 = [],
        sentimentData = []

    for (var key in timeline[0].hashtags) {
        values.push({
            text: key,
            value: timeline[0].hashtags[key]
        })
    }

    for (var val of timeline2[0].sentimentEntities.positiveEntities.namedEntities.commonEntities) {
        values_2.push({
            text: val[0],
            value: val[1]
        })
    }
    sentimentData.push(values_2)
    values_2 = []

    for (var val of timeline2[0].sentimentEntities.negativeEntities.namedEntities.commonEntities) {
        values_2.push({
            text: val[0],
            value: val[1]
        })
    }
    sentimentData.push(values_2)
    values_2 = []

    for (var val of timeline2[0].sentimentEntities.neutralEntities.namedEntities.commonEntities) {
        values_2.push({
            text: val[0],
            value: val[1]
        })
    }
    sentimentData.push(values_2)

    return sentimentData
}