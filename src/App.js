import React from 'react';
import Chart from './components/chart';
import Gauge from './components/gauge';
import { readGaugeData, gaugeLayout} from './Transform/logicGuage';
import { readChartData,subplotLayout } from './Transform/logicSubplot';
import './App.css';

var display = readChartData();
var valueGauge = readGaugeData();
var layouts = subplotLayout(),gaugeLayouts = gaugeLayout();

function App() {
  return ( 
    <div className="App">
      <div className="div">
        <h1>Tweet Sentiment Charts</h1>
        <Chart values = {display[0].twitter} layout = {layouts.layout}/>
        <h2>Facebook Sentiment Charts</h2>
        <Chart values = {display[1].facebook} layout = {layouts.layout} />
        <h2>Mean Sentiment Gauges</h2>
        <div className='container'>
          <div className='card'>
            <Gauge value1 = {valueGauge[0]} layout = {gaugeLayout(2,3)}/>
          </div>
          <div className="card">
            <Gauge value1 = {valueGauge[1]} layout = {gaugeLayout(0,1)}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
