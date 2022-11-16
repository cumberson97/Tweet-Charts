import data1 from '../twitter_api_response.json'
import data2 from '../facebook_sentiment.json'

var display = [],
    api_res = [data1, data2]

function chartData(name, date, positive, negative, neutral) {
    return {
        [name]: [{
            type: "scatter",
            x: date,
            y: positive
        }, {
            type: "scatter",
            x: date,
            y: negative,
            xaxis: 'x2',
            yaxis: 'y2'
        }, {
            type: "scatter",
            x: date,
            y: neutral,
            xaxis: 'x3',
            yaxis: 'y3'
        }]
    }

}


export function subplotLayout() {
    return {
        layout: {
            grid: { rows: 2, columns: 2, pattern: 'independent', ygap: .35 },
            height: 1050,
            width: 1100,
            xaxis: { type: 'date', dtick: 'D1' },
            xaxis2: { type: 'date', dtick: 'D1' },
            xaxis3: { type: 'date', dtick: 'D1' },
            annotations: [{
                text: "Positive",
                font: {
                    size: 16,
                    color: 'black',
                },
                showarrow: false,
                align: 'center',
                x: 0.13,
                y: 1,
                xref: 'paper',
                yref: 'paper'
            }, {
                text: "Negative",
                font: {
                    size: 16,
                    color: 'black',
                },
                showarrow: false,
                align: 'center',
                x: 0.83,
                y: 1,
                xref: 'paper',
                yref: 'paper'
            }, {
                text: "Neutral",
                font: {
                    size: 16,
                    color: 'black',
                },
                showarrow: false,
                align: 'center',
                x: 0.13,
                y: .45,
                xref: 'paper',
                yref: 'paper'
            }]
        }
    }
}


export function readChartData() {
    for (const data of api_res) {
        if ("twitter" in data.stats) {
            const twitter_timeline = data.stats.twitter.timelineStats.timeline;
            var positive = [],
                negative = [],
                neutral = [],
                date = [];
            for (const timel of twitter_timeline) {
                positive.push(timel.sentimentAsCategories.positiveTweets)
                negative.push(timel.sentimentAsCategories.negativeTweets)
                neutral.push(timel.sentimentAsCategories.neutralTweets)
                date.push(timel.startDate)
            }

            display.push(chartData("twitter", date, positive, negative, neutral));

        } else {
            const facebook_timeline = data2.stats.facebook.timelineStats.timeline;
            positive = [];
            negative = [];
            neutral = [];
            date = [];
            for (const timel of facebook_timeline) {
                positive.push(timel.sentimentAsCategories.positiveComments)
                negative.push(timel.sentimentAsCategories.negativeComments)
                neutral.push(timel.sentimentAsCategories.neutralComments)
                date.push(timel.startDate)
            }
            display.push(chartData("facebook", date, positive, negative, neutral));
        }
    }

    return display
}