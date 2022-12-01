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
        values = [];


    const _timeline = api_res.stats.linkedin.timelineStats.organisationFollowersLifetime
    for (const timel of _timeline) {
        values_arr = []
        for (const Da of timel.followers_split.followerCountsBySeniority) {

            if (Da.senioritiesText) {
                followerCount.push(Da.followerCounts.organicFollowerCount)
                valueText.push(Da.senioritiesText)
            }
        }
        values_arr.push(pieChartData(followerCount, valueText, "By Seniority", position))
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
        values.push(values_arr)
    }

    return values
}