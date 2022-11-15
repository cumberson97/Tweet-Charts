import React from 'react';
import Plot from 'react-plotly.js';

const Gauge = ({value1},{layout}) =>{
  
    return(
        <div>
            <Plot
                data={value1}
                layout = {layout}
            />
        
        </div>
    )
}

Gauge.defaultProps = {
    layout: { width: 300, height: 450, margin: { t: 0, b: 0 } }
}

export default Gauge;