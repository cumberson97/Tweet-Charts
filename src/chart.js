import React from 'react';
import Plot from 'react-plotly.js';
import data from './twitter_api_response.json'


function chart(){
        console.log(barX)
        return(<div>
            <Plot
                data={[
                    {  
                        type:"scatter",
                        x: [date1,date2],
                        y: [pos1,pos2]
                    },
                    {
                        type:"scatter",
                        x: [date1,date2],
                        y: [neg1,neg2],
                        xaxis: 'x2',
                        yaxis: 'y2'
                    },
                    {
                        type:"scatter",
                        x: [date1,date2],
                        y: [neu1,neu2],
                        xaxis: 'x3',
                        yaxis: 'y3'
                    }
            


                ]}
                layout ={{grid: {rows: 2, columns: 2, pattern: 'independent',ygap:.35},height:1050,width:1100,annotations:[{
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
                 },{
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
                 },{
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
                 }]}}
            
            
            />
        </div>
            );
    
}


var test =data.stats.twitter.timelineStats.timeline[0].top20TweetsByFollowers;

var pos1 =data.stats.twitter.timelineStats.timeline[0].sentimentAsCategories.positiveTweets;
var pos2 =data.stats.twitter.timelineStats.timeline[1].sentimentAsCategories.positiveTweets;

var neg1 =data.stats.twitter.timelineStats.timeline[0].sentimentAsCategories.negativeTweets;
var neg2 =data.stats.twitter.timelineStats.timeline[1].sentimentAsCategories.negativeTweets;

var neu1 =data.stats.twitter.timelineStats.timeline[0].sentimentAsCategories.neutralTweets;
var neu2 =data.stats.twitter.timelineStats.timeline[1].sentimentAsCategories.neutralTweets;

var date1 =data.stats.twitter.timelineStats.timeline[0].startDate
var date2 =data.stats.twitter.timelineStats.timeline[1].startDate
var barX = [], barY = [];
var menY = [];
var sentiY = [],sentimentsN = ['NEGATIVE','POSITIVE','NEUTRAL'], sentimentCount = [0,0,0];

for (const val of test){    
    barY.push(val.followers)
    barX.push(val.handler_name)
    sentiY.push(val.sentimentSubjectivity)
    
    if(val.mentions !==null){
        menY.push(val.mentions.length)
    }else{
        menY.push(0)
    }

    if(val.sentimentPolarityLabel===sentimentsN[0]){
        sentimentCount[0]++;
    }else if(val.sentimentPolarityLabel===sentimentsN[1]){
        sentimentCount[1]++;
    }else{
        sentimentCount[2]++;
    }


}

export default chart;