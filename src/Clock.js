import React,{Component} from 'react';
import DigitalClock from './Digitalclock.js';
import AnalogClock from './Analogclock.js';
import './index.css';
class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            analogTime: new Date().toLocaleString(),
            digitalTime: new Date().toLocaleTimeString()
        }
        this.updateTime(); 
    }

    updateTime(){
        setInterval(()=>{
           this.setState({
               analogTime: new Date().toLocaleString(),
               digitalTime: new Date().toLocaleTimeString()
           })
        },1000)
    }

    render(){
        return(
           <div>
            <h1>React: Digital + Analog Clock</h1>
            <DigitalClock time={this.state.digitalTime}/>
            <AnalogClock time={this.state.analogTime}/>
            </div>
           
        )
    }
}
export default Clock;

