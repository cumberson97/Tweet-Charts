import React from 'react';
import WordCloud from "react-d3-cloud";


const fontSize = (word) => word.value / 20;
const rotate = (word) => (word.value % 90) - 45;

const Wordcloud = (props)=>{
    return (
        <WordCloud
      width={1000}
      height={750}
      data={newData}
      fontSize={fontSize}
      rotate={rotate}
      padding={2}
    />
    );
}