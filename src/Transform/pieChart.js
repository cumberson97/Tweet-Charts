import { barchartData } from "../visualization_param/barChart_params";
import { pieChartData } from "../visualization_param/piecChart_params";

// Data related to the pieChart is read here
// This data is then sent to the relevant data function that formats them into the object format to be used by plotly


export function readMultiPieChartData(api_res) {
    var followerCount = [],
        valueText = [],
        r = 0,
        c = 0,
        position = [r, c],
        values_arr = [],
        bar_values = [],
        values = [];


    const _timeline = api_res.stats.linkedin.timelineStats.organisationFollowersLifetime
    for (const timel of _timeline) {
        values_arr = []
        bar_values = []
        for (const Da of timel.followers_split.followerCountsBySeniority) {

            if (Da.senioritiesText) {
                followerCount.push(Da.followerCounts.organicFollowerCount)
                valueText.push(Da.senioritiesText)
            }
        }
        values_arr.push(pieChartData(followerCount, valueText, "By Seniority", position))
        bar_values.push(barchartData(followerCount, valueText))
        followerCount = []
        valueText = []
        for (const Da of timel.followers_split.followerCountsByIndustry) {

            if (Da.industryText) {
                followerCount.push(Da.followerCounts.organicFollowerCount)
                valueText.push(Da.industryText)
            }
        }
        position[0]++;
        values_arr.push(pieChartData(followerCount, valueText, "By Industry", position))
        bar_values.push(barchartData(followerCount, valueText))
        followerCount = []
        valueText = []
        for (const Da of timel.followers_split.followerCountsByStaffCountRange) {

            if (Da.staffCountRange) {
                followerCount.push(Da.followerCounts.organicFollowerCount)
                valueText.push(Da.staffCountRange.replace("_", " "))
            }
        }
        position[1]++
            position[0]--
            values_arr.push(pieChartData(followerCount, valueText, "By Staff Count Range", position))
        bar_values.push(barchartData(followerCount, valueText))
        followerCount = []
        valueText = []
        for (const Da of timel.followers_split.followerCountsByFunction) {

            if (Da.functionText) {
                followerCount.push(Da.followerCounts.organicFollowerCount)
                valueText.push(Da.functionText)
            }
        }
        position[0]++
            values_arr.push(pieChartData(followerCount, valueText, "By Function", position))
        bar_values.push(barchartData(followerCount, valueText))
            //console.log(bar_values)
        values.push(values_arr)
    }

    return bar_values
}