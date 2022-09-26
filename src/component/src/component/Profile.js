import React from 'react'

export default function Profile() {
  return (
    <div className="col main pt-5 mt-3" style={{backgroundColor:"#EFF3FD"}} >
        <div class="card mx-3">
            <div class="card-body">
            <div class="row g-3 ">
                         <div class="col d-flex ">
                            <label className='my-3  fw-bold'>Email</label>
                            <input type="email"  className="form-control mx-3" style={{backgroundColor:"#F2F1F1"}} placeholder="admin@admin.com" aria-label="Email"/>
                         </div>
                        <div class="col d-flex ">
                             <label className='my-3  fw-bold'>Country</label>
                         <input type="text"  className="form-control mx-3 "     style={{backgroundColor:"#F2F1F1"}}    placeholder="admin@admin.com" aria-label="Country"/>
                        </div>
  
            </div>
            <div class="row g-3 my-3">
                         <div class="col d-flex ">
                            <label className='my-3  fw-bold'>Phone</label>
                            <input type="number"  className="form-control mx-3 " style={{backgroundColor:"#F2F1F1"}} placeholder="+44 0747 137 0804" aria-label="phone"/>
                         </div>
                        <div class="col d-flex ">
                             <label className='my-3  fw-bold'>WeChat</label>
                         <input type="text"  className="form-control mx-3"       style={{backgroundColor:"#F2F1F1"}}  placeholder="Start a chat" aria-label="chat"/>
                        </div>
  
            </div>
            <div class="row g-3 my-3">
                         <div class="col d-flex ">
                            <label className='my-3  fw-bold'>Name</label>
                            <input type="text"  className="form-control mx-3"     style={{backgroundColor:"#F2F1F1"}}   placeholder="Name" aria-label="name"/>
                         </div>
                        <div class="col d-flex ">
                             <label className='my-3  fw-bold'>Whatsapp</label>
                         <input type="number"  className="form-control mx-3"      style={{backgroundColor:"#F2F1F1"}}    placeholder="+44 0747 137 0804" aria-label="whatsapp"/>
                        </div>
  
            </div>
            </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4 my-3">
                <div class="col">
                    <div class="card mx-3" style={{height: "286px" ,  width: "327px" ,borderRadius: "16px"}}>
                      <div class="card-body">
                        <h5 class="card-title my-3" style={{fontWeight:"700" , fontSize:"28px"}}>Update Password</h5>
                        <div style={{marginTop:"40px"}}> 
                            <label className='my-3' style={{fontStyle: "Bold" , fontSize: "20px"}}>New Password</label>
                             <input type="password"  className="form-control " style={{backgroundColor:"#F2F1F1" , width: "208px" ,  height: "42px", cornerRadius: "50px"}}  aria-label="uppwd"/>
                         </div>
                         <button type="button" className="btn text-white" style={{backgroundColor:"#8DDDB7" , marginTop:"20px"}}>Update </button>
                      </div>
                    </div>
                </div>
            <div class="col">
              <div class="card "style={{height: "286px" ,  width: "327px" ,borderRadius: "16px"}}>
                <div class="card-body">
                  <h5 class="card-title my-3" style={{fontWeight:"700" , fontSize:"28px"}}>Profile Photo</h5>
                
                  <div className='col'>
                    <img src="..." className="rounded my-3" alt="..."></img><br/>
                  <button type="button" className="btn text-white" style={{backgroundColor:"#8DDDB7" , marginTop:"90px"}}>Upload New</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card " style={{height: "286px" ,  width: "327px" ,borderRadius: "16px"}}>
                <div class="card-body">
                  <h5 class="card-title my-3" style={{fontWeight:"700" , fontSize:"28px"}}>Remaining Class</h5>
                  <a href="/#" className="btn text-white font-weight-bold " style={{backgroundColor:"#8DDDB7" , paddingTop:"-30px",width:"162px" , height:"42px" , marginTop:"50px" , marginLeft:"50px" ,fontWeight:"700",fontSize:"25px"}}>47</a>
                </div>
              </div>
            </div>

        </div>
        </div>
      
  )
}
