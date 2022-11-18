import data1 from '../twitter_api_response.json'
import data2 from '../facebook_sentiment.json'
import { chartData } from '../visualization_param/subplot_params';
var display = [],
    api_res = [data1, data2]





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