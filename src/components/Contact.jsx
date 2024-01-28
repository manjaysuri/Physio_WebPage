import React from 'react'
import Lottie from 'lottie-react'
import data from './assets/main-phone.json'




  const phoneNumber = '8445881527'; // Replace with the desired phone number

  const handleDialButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };




const Contact = () => {
  return (<>
  <div className='flex flex-col text-center m-5 mt-20'>
    <div className='overflow-hidden'>
      <span className='text-4xl lg:text-5xl'>
        CONTACT US
      </span><br/>
      <span className='text-xl lg:text-2xl text-neutral-400'>
        For Issues and Appointments for Home Visit
      </span>
    </div>
    <div className='flex flex-col lg:flex-row m-1 lg:m-6'>
      <div className='w-full lg:w-1/2' style={{height:"500px"}}>
          <Lottie animationData={data} className='w-full h-full'/>
      </div>
      <div className='w-full lg:w-1/2 h-full p-2 lg:p-20 flex flex-col'>
      <span className='text-xl overflow-hidden'>
      Reach out to us and take the first step towards optimal health and mobility. 
      Our dedicated team of physiotherapy experts 
      is ready to bring personalized care to the comfort of your home. 
      Experience the convenience of expert physiotherapy at your doorstep. 
      Contact us now to embark on your journey to a pain-free and active life.

      </span><br/>
      <span className='text-left text-lg lg:text-xl text-blue-800 overflow-hidden'>Phone Number:<span>+918445881527/+919899064598</span></span><br/>
      <span className='text-left text-lg lg:text-xl text-blue-800 overflow-hidden'>For Any Issues:<br/><span>Proaktivephysiotherapy12@gamail.com</span></span>
      
      
      <button onClick={handleDialButtonClick} className='overflow-hidden border-2 border-sky-900 ease-in-out duration-500
          rounded-full text-2xl h-16 lg:h-20 w-full lg:w-4/5 mt-10 hover:bg-sky-800 hover:text-white'> Click Here To Dial</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Contact