import {useEffect,useState} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

 
 
 
const Dashboard= () => {
   
   const[record,setRecord] = useState([])
 
   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   }
 
   useEffect(() => {
      getData();
   },)
    
 
    return (
        <>
         
    <div className="col main pt-5 mt-3" style={{backgroundColor:"#EFF3FD"}} >
        <div className="row mb-3 my-3 mx-3">
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
                    <div className="card-body " style={{backgroundColor:"#8DDDB7"}}>
                        <div className="text-center"><i className=" fa-1x">Cancelled</i></div>
                        <h6 className="text-center fa-2x">3 classes</h6>
                    </div>
                </div>
            </div>
           
         </div>
         <h3 className='font-weight-bold'>Choose Your teacher</h3>
         <div className="card mb-3" style={{maxWidth: '1140px'}}>
            <div className="row no-gutters">
                <div className="col-md-4"><img src="..." alt="..."/> </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className='d-flex'>
                        <h5 className="card-title fa-1x font-weight-bold">Teacher Army </h5>
                        <h5 className="card-title fa-1x font-weight-bold" style={{marginLeft :" 100px"}}>United Kingdom</h5>
                        <button className='btn text-white font-weight-bold ' style={{backgroundColor : "#8DDDB7" , marginLeft:"260px" , marginTop:"-10px"}}>Book Now</button>
                        </div>
                        <p className="card-text my-3 font-weight-bold">Amy has 10 years of education experience.She has many experiences in 6-15 years of enlightenment education.She is good at heuristic guidance to children to acquire language in the classroom and she also has a registered lecturer in positive discipline.</p>
                       
                    </div>
                </div>
            </div>
        </div>

        <div className="card mb-3" style={{maxWidth: '1140px'}}>
            <div className="row no-gutters">
                <div className="col-md-4"><img src="..." alt="..."/> </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className='d-flex'>
                        <h5 className="card-title fa-1x font-weight-bold">Teacher Army </h5>
                        <h5 className="card-title fa-1x font-weight-bold" style={{marginLeft :" 100px"}}>United Kingdom</h5>
                        <button className='btn text-white font-weight-bold ' style={{backgroundColor : "#8DDDB7" , marginLeft:"260px" , marginTop:"-10px"}}>Book Now</button>
                        </div>
                        <p className="card-text my-3 font-weight-bold">Amy has 10 years of education experience.She has many experiences in 6-15 years of enlightenment education.She is good at heuristic guidance to children to acquire language in the classroom and she also has a registered lecturer in positive discipline.</p>
                       
                    </div>
                </div>
            </div>
        </div>


        
 
      </div>
        
        </>
    )
}
 
export default Dashboard