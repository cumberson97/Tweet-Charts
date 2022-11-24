import React from 'react';
import Plot from 'react-plotly.js';


const Bubble = (props) => {
        return(
            <Plot
                data={props.values}
                layout = {props.layout}
            />
            );
    
}

export default Bubble;