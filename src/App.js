import React, { useEffect } from 'react';
import Chart from './components/chart';
import Gauge from './components/gauge';
import Map from './components/map';
import Bubble from './components/bubbleChart';
import { readGaugeData} from './Transform/logicGuage';
import { readChartData} from './Transform/logicSubplot';
import { subplotLayout } from './visualization_param/subplot_params';
import link from "./linkedin_data_for.json"
import { readMapData } from './Transform/mapData'; 
import { mapLayout, mapScatterLayout } from './visualization_param/map_params';
import { readBubbleChartData } from './Transform/bubbleChart';
import { layoutBubbleChart } from './visualization_param/bubble_params';
import './App.css';
import { useState } from 'react';
import { readMultiPieChartData } from './Transform/pieChart';
import { layoutMultiPieChart } from './visualization_param/piecChart_params';

var display = readChartData();
var valueGauge = readGaugeData();
var layouts = subplotLayout();
var bubble_Chart = readBubbleChartData();
var pie_vals = readMultiPieChartData(link);

function App() {

  const [map_data, setMap] =useState([]);
  const [map_data2, setMap2] = useState([]);
  

  useEffect(()=>{
    const addmap = async () =>{
      var val = await readMapData(link,"Country");
      var val2 = await readMapData(link,"Region");
      
      setMap(val)
      setMap2(val2)
    }
    addmap();
  },[])


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
            <Gauge value1 = {valueGauge[0]}/>
          </div>
          <div className="card">
            <Gauge value1 = {valueGauge[1]} />
          </div>
        </div>
        <div className='card'>
        <Map values = {map_data[0]} layout = {mapLayout()}/> 
        </div>
        <div className='card'>
        <Map values = {map_data2[0]} layout = {mapScatterLayout()}/> 
        </div>
               
        <Chart values = {pie_vals[0]} layout = {layoutMultiPieChart()} />
        <div className='card'>
        <Bubble values = {bubble_Chart[1]} layout = {layoutBubbleChart()} />
        </div>
        
      </div>
    </div>
  );
}

export default App;
