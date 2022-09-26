import React from 'react'

export default function Checkout() {
  return (
   <>
   <div className='col main pt-5 mt-3 '>
   <div className="card" style={{width:"500px"}}>
  <h5 className="card-header text-center text-white" style={{backgroundColor:"#8DDDB7"}}>Checkout for Payment</h5>
  <div className="card-body">
  <form className="row g-3">
  <div className="col-md-6">
    <label className="form-label">Name</label>
    <input type="text" className="form-control"/>
  </div>
  <div className="col-md-6">
    <label for="" className="form-label">Email</label>
    <input type="email" className="form-control"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Enter your Address"/>
  </div>
 
  <div className="col-md-6">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div><br/>
  <div className="form-check">
    <h5  className="my-3"  style={{marginLeft:"-20px"}}>Select Payment Method </h5>
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label className="form-check-label" for="exampleRadios1">Credit Card</label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className="form-check-label" for="exampleRadios2"> Debit Card</label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className="form-check-label" for="exampleRadios2">Paypall</label>
</div>
<div className="row g-3">
  <div className="col-sm-7">
    <input type="text" className="form-control" placeholder="Name"/>
  </div>
  <div className="col-sm">
    <input type="text" className="form-control" placeholder="Card Number" />
  </div>
  <div className="col-sm">
    <input type="text" className="form-control" placeholder="CV" />
  </div>
</div>

  <div className='col-md-6' style={{marginLeft:"180px" , marginTop:"50px"}}>
  <button type='submit' className="btn btn-md text-white" style={{backgroundColor:"#8DDDB7"}}>Checkout</button>
  </div>
  
</form>
   
  </div>
</div>
   </div>
   
   </>
  )
}
