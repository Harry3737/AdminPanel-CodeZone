import React from 'react'
const Sidebar = () => {
    return (
        <>
        <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"white"}}>
       <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
           <li className="nav-item mb-2 mt-3"><a className="nav-link text-secondary" href="#"><img src='' alt='no image' className='rounded'/><h5>Hello Wang Wang</h5></a></li>
           <li className="nav-item mb-2 "><a className="nav-link text-secondary" href="#"><i className="fas fa-user font-weight-bold"></i> <span className="mx-2">Dashboard</span></a></li>
           <li className="nav-item mb-2"> <a className="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i className="far fa-file-word font-weight-bold"></i> <span className="mx-2"> Book Classes</span></a></li>
           <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/#"><i className="far fa-chart-bar font-weight-bold"></i> <span className="mx-2">History</span></a></li>
           <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/#"><i className="fas fa-file-export font-weight-bold"></i><span className="mx-2">Videos</span></a></li>
           <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/#"><i className="fas fa-tablet-alt font-weight-bold"></i><span className="mx-2">Buy Classes</span></a></li>
           <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/#"><i className="fas fa-atom font-weight-bold"></i> <span className="mx-2">Settings</span></a></li>
           
       </ul>
  </div>
        </>
    )
}
 
export default Sidebar