import React from 'react';
import Speedometer from "react-d3-speedometer";


const Gauge = (props) =>{ 
    return(
        <div className='gauge'>
            <Speedometer 
            minValue={props.value1.min}
            maxValue={props.value1.max}
            needleHeightRatio={props.value1.needleHeightRatio}
            ringWidth={props.value1.ringWidth}
            segments={props.value1.segments}
            value={props.value1.value}
            width = {props.value1.width}
            height = {props.value1.height}
            segmentColors={props.value1.segmentColors}
            needleColor={props.value1.needleColor}
            />
            <p>{props.value1.name}</p>
        
        </div>
    )
}


export default Gauge;