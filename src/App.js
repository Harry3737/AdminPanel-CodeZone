import logo from './logo.svg';
import './App.css';
import React from 'react';
import Dashboard from './component/Dashboardteachinglist';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import { BrowserRouter as Router, Routes, Route ,  Redirect } from 'react-router-dom'
import Dashboardhomepage from './component/Dashboardhomepage';
import TrailDone from './component/TrailDone';
import Calendar from 'react-calendar'; 
import { useState } from 'react';
import Bookdate from './component/Bookdate';
import BookingSummary from './component/BookingSummary';
import Classhistory from './component/Classhistory';
import Videolearn from './component/Videolearn';
import ChoosePlan from './component/ChoosePlan';
import Profile from './component/Profile';
import Checkout from './component/Checkout';
import Time from './component/Time';
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars'


function App() {

  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/dashboardhomepage' element={<Dashboardhomepage/>} />
      <Route path='/traildone' element={<TrailDone/>} />
      <Route path='/bookdate' element={<Bookdate/>} />
      <Route path='/bookingsummary' element={<BookingSummary/>} />
      <Route path='/classhistory' element={<Classhistory/>} />
      <Route path='/videolearn' element={<Videolearn/>} />
      <Route path='/chooseplan' element={<ChoosePlan/>} />
      <Route path='/profile' element={<Profile/>} />
      
  
      </Routes>
    </Router>
    
</>
  );
}

export default App;
