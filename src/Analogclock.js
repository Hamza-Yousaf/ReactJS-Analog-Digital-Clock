import React,{Component} from 'react';
import './index.css';
function AnalogClock (props){
    let time = new Date(props.time);   
    let clockWrap ={
        color:'#fff',
        position:'relative',
        margin: '50px auto',
        width:555,
        height: 555,
        border:'20px solid #019394',
        borderRadius: '50%',
        boxShadow: '0 0 0px 10px #007874, inset 0 0 0px 7px #01c4c4',
    }
    let circle = {
        width: 25,
        height: 25,
        position: 'relative',
        margin: '262.75px auto',
        borderRadius: '50%',
        backgroundColor:'#01c4c4',
    }
    let number3 = {
        transform:'rotate(90deg)',
        position: 'absolute',
        top:'48%',
        right: 8,
        width:10,
        height:17,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        background:'#01c4c4',
    }
    let number6 = {
        transform:'rotate(180deg)',
        position: 'absolute',
        left:'49%',
        bottom: 6,
        width:10,
        height:17,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        background:'#01c4c4',
    }  
    let number9 = {
        transform:'rotate(270deg)',
        position: 'absolute',
        top:'48%',
        left:8,
        width:10,
        height:17,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        background:'#01c4c4',
    }  
    let number12 = {
        transform:'rotate(360deg)',
        position: 'absolute',
        left: '49%',
        top:6,
        width:10,
        height:'17px',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        background:'#01c4c4',
    }
    let secondHand={
        height: 227,
        width: 5,
        position: 'absolute',
        top: '10%',
        left: '49.5%',
        backgroundColor:'#01c4c4',
        opacity: '.7',
        borderRadius: 3,
        transform:'rotate('+((time.getSeconds()/60)* 360).toString() + 'deg)',
        transformOrigin:'bottom center',
    }
    let minutehand={
        height: 200,
        width: 8,
        position: 'absolute',
        top: '13.5%',
        left: '49.2%',
        backgroundColor:'#01c4c4',
        opacity: '.6',
        borderRadius: 7,
        transform: 'rotate('+((time.getMinutes()/60)* 360).toString() + 'deg)',
        transformOrigin:'bottom center',
    }
    let hourHand={
        height: 170,
        width: 12,
        position: 'absolute',
        top: '19.3%',
        left: '48.9%',
        backgroundColor:'#01c4c4',
        opacity: '.6',
        borderRadius: 7,
        transform: 'rotate('+((time.getHours()/12)* 360).toString() + 'deg)',     
        transformOrigin:'bottom center',
    }

    return (
    <div style={clockWrap}>
        <div style={circle}> </div> 
        <div style={number3}> </div> 
        <div style={number6}> </div> 
        <div style={number9}> </div> 
        <div style={number12}> </div> 
        <div style={secondHand}> </div>
        <div style={minutehand}> </div>
        <div style={hourHand}> </div>
    </div>
    )
}
export default AnalogClock
