import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from "./Navbar"
import Footer from './Footer'
import { Button } from '@mui/material'
import data from '../assets/phone.json'
import Lottie from 'lottie-react'
const Layout = () => {

  const phoneNumber = '1234567890'; // Replace with the desired phone number

  const handleDialButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };




  return (
    <>
     <Navbar/>
    <div className='flex flex-col z-0'> 
       
       
        <div>
            {<Outlet/>}
        </div>
        <div>
          <Footer/>
        </div>
    </div>
    <div className='fixed bottom-0 right-0 h-44 w-44'>
    <Lottie animationData={data} onClick={handleDialButtonClick}/>
    
    </div>
    </>
  )
}

export default Layout