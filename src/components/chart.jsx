import React from 'react';

import Plot from 'react-plotly.js';


const Chart = (props) => {
        return(<div className='card'>
            <Plot
                data={props.values}
                layout = {props.layout}
                config = {props.config}
            />
        </div>
            );
    
}

export default Chart;