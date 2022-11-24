import data1 from '../twitter_api_response.json'
import data2 from '../facebook_sentiment.json'
import { bubbleChartData } from '../visualization_param/bubble_params';

const color = ["rgb(44, 160, 101)", "rgb(255, 65, 54)", "rgb(93, 164, 214)"]
export function readBubbleChartData() {
    var display = [],
        api_res = [data1, data2]
    var positive, negative, neutral, date, y
    for (const data of api_res) {
        if ("twitter" in data.stats) {
            const twitter_timeline = data.stats.twitter.timelineStats.timeline;
            positive = []
            negative = []
            neutral = []
            date = []
            y = []
            for (const timel of twitter_timeline) {
                positive.push(timel.sentimentAsCategories.positiveTweets)
                negative.push(timel.sentimentAsCategories.negativeTweets)
                neutral.push(timel.sentimentAsCategories.neutralTweets)
                date.push(timel.startDate)
            }
            y.push(positive)
            y.push(negative)
            y.push(neutral)

            display.push(bubbleChartData(date, y, color));

        } else {
            const facebook_timeline = data2.stats.facebook.timelineStats.timeline;
            positive = []
            negative = []
            neutral = []
            date = []
            y = []

            for (const timel of facebook_timeline) {
                positive.push(timel.sentimentAsCategories.positiveComments)
                negative.push(timel.sentimentAsCategories.negativeComments)
                neutral.push(timel.sentimentAsCategories.neutralComments)
                date.push(timel.startDate)
            }
            y.push(positive)
            y.push(negative)
            y.push(neutral)

            display.push(bubbleChartData(date, y, color));
        }
    }

    return display
}