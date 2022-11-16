import data1 from '../twitter_api_response.json'
import data2 from '../facebook_sentiment.json'

var meanSentimentT = [],
    api_res = [data1, data2],
    meanSentimentF = [],
    values = [];

function avg(arr) {
    var sum = 0;
    for (const i of arr) {
        sum += i
    }
    return sum / arr.length
}



function gaugeData(name, mean) {
    return [{
        domain: { x: [0, 1], y: [0, 1] },
        value: avg(mean),
        title: { text: `Mean Sentiment ${name}` },
        type: "indicator",
        mode: "gauge+number",
        gauge: {
            axis: { range: [-1, 1] },
            steps: [
                { range: [-1, .99], color: "lightgrey" },
                { range: [0, 1], color: "gray" }
            ],
        }
    }];
}


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
    values.push(gaugeData("Twitter", meanSentimentT))
    values.push(gaugeData("Facebook", meanSentimentF))
    return values
}