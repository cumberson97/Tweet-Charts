import React, { useEffect } from 'react';
import WordCloud from "react-d3-cloud";
import * as d3 from "d3";
import cloud from "d3-cloud";

var fontFamily = "sans-serif";
  var fontScale = 13;
  var padding = 2;
  var height = 550;
  var width = 600;
  const rotate = () => 0;


export function testCloud(values){
    const svg = d3
    .select("#word-cloud-div")
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .attr("font-family", fontFamily)
    .attr("text-anchor", "middle");
  
  const w_cloud = cloud()
    .size([width, height])
    .words(values)
    .padding(padding)
    .rotate(rotate)
    .font(fontFamily)
    .fontSize((d) => Math.sqrt(d.value) * fontScale)
    .on("word", ({ size, x, y, rotate, text }) => {
      svg
        .append("text")
        .attr("font-size", size)
        .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
        .text(text);
    });
    
    w_cloud.start();
} 


const fontsize = (word) => word.value * 1000;
//const rotate = (word) => (word.value % 90) - 45;

const Wordcloud = (props)=>{

    useEffect(()=>{
        testCloud(props.values)      
      },[])

    return (
        <div id='word-cloud-div'>   
        </div>
    );
}

export default Wordcloud;