import React from 'react'

export default function ChoosePlan() {
  return (
    <div className="col main pt-5 mt-3" style={{backgroundColor:"#EFF3FD"}}>
        <h5 className='text-center fa-2x' style={{ fontWeight:"700" , fontSize:"40px"}}>Choose Your Plan</h5>
        <p className='text-center' style={{paddingLeft:"40px" ,  fontWeight:"500" , fontSize:"16px"}}>Vulputate augue sed dui, eget bibendum quis fames varius id. Pellentesque orci molestie morbi.<br/>
            felis elementum, eu mauris ac arcu tincidunt. </p>
      <div className="card-group my-3">
  <div className="card mx-3" style={{width:"350px",height:"470px"}}>
    
    <div className="card-body shadow-lg p-2 ">
      <h5 className="card-title text-center my-3" style={{ fontWeight:"600" , fontSize:"24px"}}>Taster</h5>
      <h5 className="card-title text-center fw-bold" style={{ fontWeight:"700" , fontSize:"40px"}}>$250</h5>
      <ul className='my-3' style={{paddingTop:"40px"}} >
        <li className='my-3'>500 visitors</li>
        <li className='my-3'>Unlimeted projects</li>
        <li className='my-3'>extended free trail</li>
      </ul>
      <div className='text-center'>
      <a href="/#" className="btn btn-primary" style={{marginTop:"62px" ,paddingTop:"20px", width: '202px', height: '63px' , fontSize:"18px"}}>Buy Package</a>
      </div>
    </div>
  </div>
  <div className="card rounded mx-3"  style={{width:"350px",height:"470px"}}>
   
    <div className="card-body shadow-lg  ">
      <h5 className="card-title text-center my-3" style={{ fontWeight:"600" , fontSize:"24px"}}>Runner</h5>
      <h5 className="card-title text-center fw-bold" style={{ fontWeight:"700" , fontSize:"40px"}}>$400</h5>
      <ul className='my-3' style={{paddingTop:"40px"}} >
        <li className='my-3'>500 visitors</li>
        <li className='my-3'>Unlimeted projects</li>
        <li className='my-3'>extended free trail</li>
      </ul>
      <div className='text-center'>
      <a href="/#" className="btn btn-primary " style={{marginTop:"55px" ,paddingTop:"20px", width: '202px', height: '63px' , fontSize:"18px"}}>Buy Package</a>
      </div>
     
    </div>
  </div>
  <div className="card mx-3 "  style={{width:"350px",height:"470px"}}>
    <div className="card-body shadow-lg p-2 ">
      <h5 className="card-title text-center my-3" style={{ fontWeight:"600" , fontSize:"24px"}}>Champion</h5>
      <h5 className="card-title text-center fw-bold" style={{ fontWeight:"700" , fontSize:"40px"}}>$700</h5>
      <ul className='my-3' style={{paddingTop:"40px"}} >
        <li className='my-3'>500 visitors</li>
        <li className='my-3'>Unlimeted projects</li>
        <li className='my-3'>extended free trail</li>
      </ul>
      <div className='text-center'>
      <a href="/#" className="btn btn-primary " style={{marginTop:"55px" ,paddingTop:"20px", width: '202px', height: '63px' , fontSize:"18px"}}>Buy Package</a>
      </div>
      
    </div>
  </div>
</div>
    </div>
  )
}
