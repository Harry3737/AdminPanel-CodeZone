import React from 'react'
 
export const Navbar = () => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light mb-3">
                <div className="flex-row d-flex">
                    <button type="button" className="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand " href="#" style={{fontSize:'20px'}}> <img src='' className="mx-3"alt='no image'/>Lingo Talker</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="collapsingNavbar">
                    {/* <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">Home</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="//www.codeply.com">Link</a>
                        </li>
                    </ul> */}
                    <ul className="navbar-nav " style={{marginLeft: '-33px'}}>
                        <li className="nav-item">
                            <a className="nav-link mx-3" href="#myAlert" data-toggle="collapse"><i className="fa fa-globe mx-3" aria-hidden="true"></i>4.45 pm 19 Jan 2022</a>
                        </li>
                        </ul>
                    <ul className="navbar-nav " style={{marginLeft: '200px' , fontSize :'20px'}}>
                        <li className="nav-item">
                            <a className="nav-link" href="#myAlert" data-toggle="collapse"><i className="fa fa-comment mx-2"></i> Chat with us </a>
                        </li>
                        </ul>
                        <ul className='navbar-nav ' style={{marginLeft: '420px' , fontSize :'20px'}}>
                        <li className="nav-item">
                            <a className="nav-link " href="" data-target="#myModal" data-toggle="modal"><i className="fa fa-language mx-3"></i>English</a>
                        </li> 
                        </ul>
                       
                        {/* <li className="nav-item">
                  <a className="nav-link waves-effect waves-light text-white">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link waves-effect waves-light text-white">
                        <i className="fas fa-envelope-open-text"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link waves-effect waves-light text-white">
                          <i className="fas fa-align-justify"></i>
                      </a>
                    </li> */}
                    
                </div>
       </nav>
       
  </>
    )
}
export default Navbar