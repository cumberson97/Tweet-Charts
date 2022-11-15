import React from 'react';
import Chart from './chart';
import Gauge from './components/gauge';
import data1 from './twitter_api_response.json'
import data2 from './facebook_sentiment.json'
import './App.css';

var display=[],api_res=[data1,data2],meanSentiment=[];


for(const data of api_res){
  if ("twitter" in data.stats){
    const twitter_timeline =data.stats.twitter.timelineStats.timeline;
    var positive= [],negative=[],neutral=[],date=[];
    for(const timel of twitter_timeline){
        positive.push(timel.sentimentAsCategories.positiveTweets)
        negative.push(timel.sentimentAsCategories.negativeTweets)
        neutral.push(timel.sentimentAsCategories.neutralTweets)
        meanSentiment.push(timel.meanSentiment)
        date.push(timel.startDate)
    }

    display.push ({twitter:[ { type:"scatter",
                    x: date,
                    y: positive
                  },{
                    type:"scatter",
                    x: date,
                    y: negative,
                    xaxis: 'x2',
                    yaxis: 'y2'
                  },{
                    type:"scatter",
                    x: date,
                    y: neutral,
                    xaxis: 'x3',
                    yaxis: 'y3'
                  }]});

  }else{
    const facebook_timeline =data2.stats.facebook.timelineStats.timeline;
    positive= []; negative=[]; neutral=[]; date=[]; 
    for(const timel of facebook_timeline){
        positive.push(timel.sentimentAsCategories.positiveComments)
        negative.push(timel.sentimentAsCategories.negativeComments)
        neutral.push(timel.sentimentAsCategories.neutralComments)
        date.push(timel.startDate)
    }
    display.push ({facebook:[ { type:"scatter",
                    x: date,
                    y: positive
                  },{
                    type:"scatter",
                    x: date,
                    y: negative,
                    xaxis: 'x2',
                    yaxis: 'y2'
                  },{
                    type:"scatter",
                    x: date,
                    y: neutral,
                    xaxis: 'x3',
                    yaxis: 'y3'
                  }]});
  }
}

var valueGuage = [
  {
    domain: { x: [0, 1], y: [0, 1] },
    value: .3,
    title: { text: "Sentiment" },
    type: "indicator",
    mode: "gauge+number",
    gauge: {
      axis: { range: [-1, 1] },
      steps: [
        { range: [-1, .99], color: "lightgrey" },
        { range: [0, 1], color: "gray" }
      ],
    }
  }
];


function App() {
  return ( 
    <div className="App">
      <h1>Tweet Sentiment Charts</h1>
      <Chart values = {display[0].twitter}/>
      <h2>Facebook Sentiment Charts</h2>
      <Chart values = {display[1].facebook}/>
    </div>
  );
}




export default App;
