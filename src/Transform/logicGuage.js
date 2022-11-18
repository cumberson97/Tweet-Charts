import data1 from '../twitter_api_response.json'
import data2 from '../facebook_sentiment.json'
import { gaugeData } from '../visualization_param/gauge_params';

var meanSentimentT = [],
    api_res = [data1, data2],
    meanSentimentF = [],
    values = [];


export function readGaugeData() {
    for (const data of api_res) {
        if ("twitter" in data.stats) {
            const twitter_timeline = data.stats.twitter.timelineStats.timeline;
            for (const timel of twitter_timeline) {
                meanSentimentT.push(timel.meanSentiment)
            }

        } else {
            const facebook_timeline = data2.stats.facebook.timelineStats.timeline;
            for (const timel of facebook_timeline) {
                meanSentimentF.push(timel.meanSentiment)
            }
        }
    }
    values.push(gaugeData("Twitter", meanSentimentT, 300, 525))
    values.push(gaugeData("Facebook", meanSentimentF, 300, 525))
    return values
}