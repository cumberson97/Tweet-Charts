import React from 'react';
import WordCloud from "react-d3-cloud";


const fontSize = (word) => word.value * 10000;
const rotate = (word) => (word.value % 90) - 45;

const Wordcloud = (props)=>{
    return (
        <WordCloud
      width={500}
      height={500}
      data={props.values}
      fontSize={fontSize}
      //rotate={rotate}
      padding={5}
    />
    );
}

export default Wordcloud;