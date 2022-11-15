import React from 'react';
import Plot from 'react-plotly.js';


const Chart = (props) => {
        return(<div className='card'>
            <Plot
                data={props.values}
                layout ={props.layout}
            />
        </div>
            );
    
}


Chart.defaultProps = {
    layout: {grid: {rows: 2, columns: 2, pattern: 'independent',ygap:.35},height:1050,width:1100,annotations:[{
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
     }]}
}



export default Chart;