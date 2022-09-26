import React from 'react'

export default function BookingSummary() {
  return (
    <div className="col main pt-5 mt-3" style={{backgroundColor:"#EFF3FD"}} >
        <div className="row mb-3 my-3 mx-3 " style={{maxWidth: '1200px'}}>
         <div className="card mb-3 mx-3" >
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
        <div className="card" style={{width:"501px" , height:"675px" , marginLeft:"150px"}}>
  <div className="card-header  text-white text-center " style={{backgroundColor :"#5AD9BA" , height:"170px" , paddingTop:"60px" , fontSize:"30px" , fontWeight:"700"}}>
    Booking Summary
  </div>
  <div className="card-body">
    <h5 className="" style={{paddingTop:"80px " , paddingLeft:"30px"}}>Teacher :&nbsp;<span className='fw-normal'>Amy</span></h5>
    <h5 className="" style={{paddingTop:"20px " , paddingLeft:"30px"}}>Day     :&nbsp;<span className='fw-normal'>Monday</span></h5>
    <h5 className="" style={{paddingTop:"20px " , paddingLeft:"30px"}}>Date    :&nbsp;<span className='fw-normal'>22 Sep 2022</span></h5>
    <h5 className="" style={{paddingTop:"20px " , paddingLeft:"30px"}}>Time    :&nbsp;<span className='fw-normal'>2.30 - 3.00 PM</span></h5>
    
    <a href="/#" className="btn btn-lg text-white " style={{marginTop:"150px" , marginLeft:"30px",width:"200px" ,backgroundColor:"#5AD9BA"}}>Cancel</a>
    <a href="/#" className="btn btn-lg  text-white " style={{marginTop:"150px", marginLeft:"30px",width:"200px" ,backgroundColor:"#5AD9BA"}}>Book Now</a>
     
    
  </div>
</div>
        
 </div>
  )
}
