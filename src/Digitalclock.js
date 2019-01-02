import React from 'react';
import './index.css'
function DigitalClock (props){
    return (
        <div>
            <div className="digitalClock"> {props.time}</div>
        </div>
    )
}
export default DigitalClock;