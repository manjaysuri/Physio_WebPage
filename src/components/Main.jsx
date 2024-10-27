import React from 'react'
import sports from './assets/sports.png'
import chiro from './assets/chiro.jpg'
import phy from './assets/phy.jpg'
import reh from './assets/reh.jpg'
import Mid from './Mid'
import Lottie from 'lottie-react'
import data from './assets/circle.json'
import Services from './Services'
import Team from './Team'
import Contact from './Contact'

const Main = () => {
  return (
    <>
   
    <div className='relative flex flex-col lg:flex-row m-8 mt-20 text-sky-800  text-3xl lg:text-5xl font-semibold h-fit z-0'>
    <Lottie animationData={data} className='absolute h-screen w-screen opacity-20 -z-10'/>
      <div className='flex flex-col lg:w-7/12 w-full justify-between h-fit '>
        <div >
          <span className='text-xl lg:text-2xl mb-6'>We can help you to</span><br/>
          <span>Reduce your Pain</span><br/>
          <span>Improve your Movementss</span><br/>
          <span>Prevent Recurrence</span><br/>
          <button className='overflow-hidden border-2 border-sky-900 text-xl lg:text-2xl ease-in-out duration-500 
          rounded-full h-10 lg:h-20 w-1/2 lg:w-1/4 mt-10 hover:bg-sky-800 hover:text-white' >Contact Us</button>
        </div>
        <div className='flex items-end justify-end'>
        
          <img src={sports} className='h-full w-11/12 lg:w-8/12 ' />
        
        </div>
      </div>
      <div className='flex flex-row w-full lg:w-5/12 ml-3 items-end overflow-hidden'>

        <div className='w-1/2 h-4/5'>
          <img src={chiro} className='h-full w-screen '/>
        </div>
        <div className='w-1/2 ml-3 h-4/5 overflow-hidden'>
          <img src={phy} className='w-screen h-1/2 mb-6'/>
          <img src={reh} className='h-1/2 w-screen'/>
        </div>
      </div>
    </div>
    <Mid/>
    <Services/>
    <Team/>
    <Contact/>
    </>
  )
}

export default Main