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
        steps: [{
            line: { width: 40 }

        }],
        gauge: {
            axis: { range: [-1, 1] },
            bar: { color: "rgba(0,0,0,0)" },
            steps: [
                { range: [-1, -.5], color: "red" },
                { range: [-.5, .0], color: "orange" },
                { range: [0, .5], color: "yellow" },
                { range: [.5, 1], color: "green" }
            ],
            threshold: {
                line: { color: "black", width: 4 },
                thickness: .99,
                value: avg(mean)
            }
        },

    }];
}

export function gaugeLayout() {

    var theta = 93.5
    var r = 0.3
    var x_head = r * Math.cos(Math.PI / 180 * theta)
    var y_head = r * Math.sin(Math.PI / 180 * theta)

    return {
        width: 548,
        height: 550,
        margin: { t: 0, b: 0 },
        xaxis: { range: [0, 1], showgrid: false, 'zeroline': false, 'visible': false },
        yaxis: { range: [0, 1], showgrid: false, 'zeroline': false, 'visible': false },
        showlegend: false,
        annotations: [{
            ax: 0.5,
            ay: 0,
            axref: 'x',
            ayref: 'y',
            x: 0.5 + x_head,
            y: y_head,
            xref: 'x',
            yref: 'y',
            showarrow: true,
            arrowhead: 0,
            arrowsize: 1,
            arrowwidth: 4
        }]

    }
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