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
        title: { text: `Mean Sentiment ${name}`, font: { size: 20 } },
        type: "indicator",
        mode: "gauge+number",
        steps: [{
            line: { width: 40 }

        }],
        number: { font: { size: 20 } },
        gauge: {
            axis: { range: [-1, 1] },
            bar: { color: "rgba(0,0,0,0)" },
            steps: [
                { range: [-1, -.6], color: "rgba(255, 30, 30, 0.8)" },
                { range: [-.6, -.2], color: "rgba(252, 158, 59, 0.8)" },
                { range: [-.2, 0], color: "rgba(252, 250, 59, 0.8)" },
                { range: [0, .2], color: "rgba(252, 250, 59, 0.8)" },
                { range: [.2, .6], color: "rgba(163, 242, 146, 0.8)" },
                { range: [.6, 1], color: "rgba(64, 225, 30, 0.8)" }
            ],
            threshold: {
                line: { color: "black", width: 4 },
                thickness: .001,
                value: avg(mean)
            }
        },

    }];
}

export function gaugeLayout(x, y) {
    var test = [.234, .665, -.559, .618]
    var anchor = [0, .348, -.08, .35]
        /* var theta = 93.5
        var r = 0.3
        var x_head = r * Math.cos(Math.PI / 180 * theta)
        var y_head = r * Math.sin(Math.PI / 180 * theta) */

    return {
        width: 548,
        height: 550,
        margin: { t: 0, b: 0 },
        xaxis: { range: [-1, 1], showgrid: false, 'zeroline': false, 'visible': false },
        yaxis: { range: [0, 1], showgrid: false, 'zeroline': false, 'visible': false },
        showlegend: false,
        annotations: [{
            ax: anchor[x],
            ay: anchor[y],
            axref: 'x',
            ayref: 'y',
            x: test[x],
            y: test[y],
            xref: 'x',
            yref: 'y',
            showarrow: true,
            arrowhead: 0,
            arrowsize: 1,
            arrowwidth: 3
        }],
        font: { size: 15 }


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