import React from 'react'
import Calendar from 'react-calendar'; 
import { useState } from 'react';
import Time from './Time';

export default function Bookdate() {
const [date, setDate] = useState(new Date());
const [showTime, setShowTime] = useState(false) 
  return (
   <>
     <div className="col main pt-5 mt-3" style={{backgroundColor:"#EFF3FD"}}>
        <div className="row mb-3 my-3 mx-3" style={{maxWidth: '1200px'}}>
         <div className="card mb-3 mx-3">
            <div className="row no-gutters">
                <div className="col-md-4"><img src="..." alt="..."/> </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className=''>
                        <h5 className="card-title fa-1x font-weight-bold">Teacher Army </h5>
                        <h5 className="card-title fa-1x font-weight-bold" >United Kingdom</h5>
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
        </div>
  
        <div className='app'>
   
            <div><Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/></div>

                {date.length > 0 ? (
   <p><span>Start:</span>{date[0].toDateString()}&nbsp;&nbsp;<span>End:</span>{date[1].toDateString()}</p>
          ) : (
   <p className='my-3 mx-3 fw-bold'><span className='mx-3 my-3'>Default selected date:</span>{date.toDateString()}</p> 
          )
   }
    <p className='my-3 mx-3 fw-bold'><span className='mx-3 my-3'>Select the Time Slot</span>
    
   <Time showTime={showTime} date={date}/></p>

      </div>

 </div>
        
 
   </>
  )
}
