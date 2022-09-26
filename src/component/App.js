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


function App() {

  return (
    <>
    <Navbar/>
   
      <div className='container-fluid row row-offcanvas row-offcanvas-left' id='main'><Sidebar/> <Dashboard/> </div>

      <div className="container-fluid row row-offcanvas row-offcanvas-left" id="main"> <Sidebar/><Dashboardhomepage/></div>

      <div className="container-fluid row row-offcanvas row-offcanvas-left" id="main"> <Sidebar/> <TrailDone/></div>

    <div className="container-fluid row row-offcanvas row-offcanvas-left" id="main"> <Sidebar/> <Bookdate/></div>

    <div className="container-fluid row row-offcanvas row-offcanvas-left" id="main"> <Sidebar/> <BookingSummary/></div>

    <div className="container-fluid row row-offcanvas row-offcanvas-left" id="main"> <Sidebar/> <Classhistory/></div>

     <div className="container-fluid row row-offcanvas row-offcanvas-left" id="main"> <Sidebar/> <Videolearn/></div>

      <div className="container-fluid row row-offcanvas row-offcanvas-left" id="main"> <Sidebar/> <ChoosePlan/></div>

      <div className="container-fluid row row-offcanvas row-offcanvas-left" id="main"> <Sidebar/> <Profile/></div>

      <div className="container-fluid row row-offcanvas row-offcanvas-left" id="main"> <Checkout/></div>

  

</>
  );
}

export default App;
