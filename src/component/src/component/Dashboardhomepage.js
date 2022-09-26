import React from 'react'

export default function Dashboardhomepage() {
  return (
    <>
    <div className="col main pt-5 mt-3" style={{backgroundColor:"#EFF3FD"}}>
        <div className="row mb-3 mx-3">
            <div className="col-xl-3 col-sm-6 py-2 ">
                <div className="card  text-white ">
                    <div className="card-body " style={{backgroundColor:"#8DDDB7"}}>
                        <div className="text-center">
                            <i className="fa-1x ">Finshed classes</i>
                        </div>
                        <h6 className="text-center fa-2x">28 classes</h6>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2 mx-3">
                <div className="card text-white " >
                    <div className="card-body " style={{backgroundColor:"#8DDDB7"}}>
                        <div className="rotate text-center">
                            <i className=" fa-1x ">Upcoming Classes</i>
                        </div>
                        <h6 className=" text-center fa-2x">14 classes</h6>
                       
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2 mx-3">
                <div className="card text-white ">
                    <div className="card-body " style={{backgroundColor:"#8DDDB7" }}>
                        <div className="text-center"><i className=" fa-1x">Cancelled</i></div>
                        <h6 className="text-center fa-2x">3 classes</h6>
                    </div>
                </div>
            </div>
           
         </div>
         <div className="card text-center">
                
                     <div className="card-body "  style={{height :'250px'}}>
                            <h5 className="card-title text-left font-weight-bold ">Free Trail Class</h5>
                            <p className="card-text text-center text-danger font-weight-bold" style={{marginTop:"80px" , fontSize :"20px"}}>Want a Free  trail class ?</p>
                            <a href="/#" className="btn text-white font-weight-bold" style={{backgroundColor:"#8DDDB7"}}>Book Now</a>
                    </div>
               
            </div>

            <div className="card text-center my-3">
                
                <div className="card-body" style={{height :'250px'}} >
                       <h5 className="card-title text-left font-weight-bold" >Upcoming Classes</h5>
                       <p className="card-text text-center text-danger font-weight-bold" style={{marginTop:"80px" , fontSize :"20px"}}>No upcoming classes </p>
                       <a href="/#" className="btn text-white font-weight-bold" style={{backgroundColor:"#8DDDB7"}}>Book Now</a>
               </div>
          
       </div>
      </div>
        
        </>
    )
}

