import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './Home'
import RegisterAndLogin from '../RegisterAndLogin';
import '../CSS/PasswordLoginwithFirebase.css'
import About from './About';
import Footer from './Footer';
import Navbar from './Navbar';
import Women from './Women';
import Men from './Men';
import Jeweelry from './Jeweelry';

const PasswprdLoginwithfirebase=()=> {
  return (
    <BrowserRouter>
    <Navbar/>
    <div>
      <Routes>
        {/* <Route path='/' element={<RegisterAndLogin />} /> */}
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/home' element={<HomeScreen />}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/jeweelry' element={<Jeweelry/>}/>
      </Routes>
      <Footer/> 
    </div>
    </BrowserRouter>
  )
}

export default PasswprdLoginwithfirebase;
