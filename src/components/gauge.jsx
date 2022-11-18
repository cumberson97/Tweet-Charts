import React from 'react';
import Plot from 'react-plotly.js';


const Gauge = (props) =>{ 
    return(
        <div>
       
            <Plot
                data={props.value1}
                layout = {props.layout}
            />
        
        </div>
    )
}


export default Gauge;