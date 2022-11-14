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
                        x: barX,
                        y: barY
                    },
                    {
                        type:"bar",
                        x: barX,
                        y: menY,
                        xaxis: 'x2',
                        yaxis: 'y2'
                    },
                    {
                        type:"scatter",
                        x: barX,
                        y: sentiY,
                        xaxis: 'x3',
                        yaxis: 'y3'
                    },
                    {
                        type:"bar",
                        x: sentimentsN,
                        y: sentimentCount,
                        xaxis: 'x4',
                        yaxis: 'y4'
                    }
            


                ]}
                layout ={{grid: {rows: 2, columns: 2, pattern: 'independent',ygap:.35},height:1050,width:1100,annotations:[{
                    text: "Number Of Followers",
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
                    text: "Mentions Of Tweets",
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
                    text: "Sentiment Subjectivity",
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
                 },{
                    text: "Sentiments Of Top 20 Tweets",
                      font: {
                      size: 16,
                       color: 'black',
                    },
                    showarrow: false,
                    align: 'center',
                    x: 0.89, 
                    y: .45, 
                    xref: 'paper',
                    yref: 'paper'
                 } ]}}
            
            
            />
        </div>
            );
    
}


var test =data.stats.twitter.timelineStats.timeline[0].top20TweetsByFollowers;
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