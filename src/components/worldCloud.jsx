import React, { useEffect,useRef } from 'react';
import WordCloud from "react-d3-cloud";
import ReactFauxDom from 'react-faux-dom';
import * as d3 from "d3";
import cloud from "d3-cloud";

/* var fontFamily = "sans-serif";
  var fontScale = 13;
  var padding = 2;
  var height = 550;
  var width = 600; */
  const rotate = () => 0;


const fontsize = (word) => word.value * 1000;
//const rotate = (word) => (word.value % 90) - 45;

const Wordcloud = (props)=>{
  var fontFamily = props.fontFamily;
  var fontScale = props.fontScale;
  var padding = props.padding;
  var height = props.height;
  var width = props.width;
  var color  =  props.color;
  
    useEffect(()=>{
       //test = testCloud(props.values)      
      },[])
      
      const el = ReactFauxDom.createElement('div') 
    
      
      d3.select(el).selectAll('*').remove();
      const svg = d3
      .select(el)
      .append("svg")
      .attr("height", height)
      .attr("width", width)
      .attr("font-family", fontFamily)
      .attr("text-anchor", "middle");
    
    const w_cloud = cloud()
      .size([width, height])
      .words(props.values)
      .padding(padding)
      .rotate(rotate)
      .font(fontFamily)
      .fontSize((d) => Math.sqrt(d.value) * fontScale)     
      .on("word", ({ size, x, y, rotate, text }) => {
        svg
          .append("text")
          .attr("font-size", size)
          .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
          .style('fill',color )
          .text(text);
      });
      
      w_cloud.start();
      return el.toReact()
}


Wordcloud.defaultProps = {
  values:[],
  fontFamily: "sans-serif",
  fontScale: 13,
  padding: 2,
  height : 550,
  width : 600,
  color : "#386087"
}

export default Wordcloud;