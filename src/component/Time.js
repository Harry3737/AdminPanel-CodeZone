import {useState} from 'react';
import Calendar from 'react-calendar';
import '../App.css';
import React from 'react'


const time = [
  '08:00-9.00 ',
  '09:00-10.00',
  '10:00-11.00',
  '11:00-12.00',
  '12:00-1.00',
  '1.00-2.00',
  '2.00-3.00',
  '3.00-4.00',
  '4.00-5.00']


export default function Time(props) { 
  const [event, setEvent] = useState(null)
  const [info, setInfo] = useState(false)
 
  function displayInfo(e) {
    setInfo(true);
    setEvent(e.target.innerText);
 }
 
  return (
    <>
  <div className="times">
   {time.map(times => {
    return (
    <div className='card my-2 ' style={{backgroundColor:"#8DDDB7" , width:"400px" , height:"50px" , marginLeft:"30px"}}>
      <button  className='mx-3 my-2  fw-bold' onClick={(e)=> displayInfo(e)}> {times}  </button>
    </div>
        )
     })}
    <div className='my-3 mx-3'>
      {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
    </div>
 </div>
  </>
  )
}
