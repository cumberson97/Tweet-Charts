import React from 'react';
import Plot from 'react-plotly.js';
import data from './twitter_api_response.json'


function chart(props){
        return(<div>
            <Plot
                data={props.values}
                layout ={{grid: {rows: 2, columns: 2, pattern: 'independent',ygap:.35},height:1050,width:1100,annotations:[{
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
                 }]}}
            
            
            />
        </div>
            );
    
}






export default chart;