import React from 'react';
import Plot from 'react-plotly.js';

const gauge = (props) =>{
  
    return(
        <div>
            <Plot
                data={props.value1}
                layout = {{ width: 600, height: 450, margin: { t: 0, b: 0 } }}
            />
        
        </div>
    )
}

export default gauge;