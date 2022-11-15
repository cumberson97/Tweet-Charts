import React from 'react';
import Chart from './chart';
import Gauge from './components/gauge';
import data1 from './twitter_api_response.json'
import data2 from './facebook_sentiment.json'
import './App.css';

var display=[],api_res=[data1,data2],meanSentimentT=[],meanSentimentF=[];

function avg(arr){
  var sum = 0;
  for(const i of arr){
    sum+=i
  }
  return sum/arr.length
}

function chartData(name,date,positive,negative,neutral) {
     
  return {[name]:[ { type:"scatter",
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
    }]}

}

function gaugeData(name, mean){
  return [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: avg(mean),
      title: { text: `Mean Sentiment ${name}` },
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
}

for(const data of api_res){
  if ("twitter" in data.stats){
    const twitter_timeline =data.stats.twitter.timelineStats.timeline;
    var positive= [],negative=[],neutral=[],date=[];
    for(const timel of twitter_timeline){
        positive.push(timel.sentimentAsCategories.positiveTweets)
        negative.push(timel.sentimentAsCategories.negativeTweets)
        neutral.push(timel.sentimentAsCategories.neutralTweets)
        meanSentimentT.push(timel.meanSentiment)
        date.push(timel.startDate)
    }

    display.push (chartData("twitter",date,positive,negative,neutral));

  }else{
    const facebook_timeline =data2.stats.facebook.timelineStats.timeline;
    positive= []; negative=[]; neutral=[]; date=[]; 
    for(const timel of facebook_timeline){
        positive.push(timel.sentimentAsCategories.positiveComments)
        negative.push(timel.sentimentAsCategories.negativeComments)
        neutral.push(timel.sentimentAsCategories.neutralComments)
        meanSentimentF.push(timel.meanSentiment)
        date.push(timel.startDate)
    }
    display.push (chartData("facebook",date,positive,negative,neutral));
  }
}



var valueGauge = gaugeData('Twitter',meanSentimentT)

var valueGauge2 = gaugeData('Facebook',meanSentimentF)





function App() {
  return ( 
    <div className="App">

      <h1>Tweet Sentiment Charts</h1>
      <Chart values = {display[0].twitter}/>
      <h2>Facebook Sentiment Charts</h2>
      <Chart values = {display[1].facebook}/>
      <h2>Mean Sentiment Gauges</h2>
      <div className='card'>
        <div>
          <Gauge value1 = {valueGauge}/>
        </div>
        <div>
          <Gauge value1 = {valueGauge2}/>
        </div>
      </div>
    </div>
  );
}




export default App;
