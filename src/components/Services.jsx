import React from 'react'
import s1 from './assets/s1.jpg'
import s2 from './assets/s2.jpg'
import s3 from './assets/s3.jpg'
import s4 from './assets/s4.jpg'
import s5 from './assets/s5.jpg'
import s6 from './assets/s6.jpg'
import Lottie from 'lottie-react'
import data from './assets/a1.json'
import data1 from './assets/shape.json'
import { Link } from 'react-router-dom'

const Services = () => {
  return (<>
 
    <div className='flex flex-col text-center m-10 overflow-hidden relative'>
      <Lottie animationData={data1} className='absolute h-screen w-screen opacity-10 z-0'/>
      <div className='flex flex-col'>
        <span className='text-5xl overflow-hidden'>Our Services</span>
        <span className='text-2xl m-20 text-neutral-400 overflow-hidden'>We serve to improve the health & quality of life of our patients</span>
      </div>
      <div>
      <Link to='/services'>
        <div className='flex flex-col lg:flex-row z-10 text-xl'>
        
          <div className='border-2 border-blue-800 w-11/12 lg:w-1/3 bg-white m-3 overflow-hidden rounded-3xl  hover:bg-blue-800 hover:text-white hover:text-2xl ease-in-out duration-500'>
            <div className='w-fit m-4 mr-30 mb-0 rounded-xl'>
              <img src={s4} />
            </div>
            <div className='flex flex-row'>
              <span className='w-1/2  flex ml-5 items-center'>Musculoskeletal</span>
              <Lottie animationData={data} className='w-1/2 h-24' />
            </div>
          </div>
         
          <div className='border-2 border-blue-800 w-11/12 lg:w-1/3 bg-white m-3 overflow-hidden rounded-3xl  hover:bg-blue-800 hover:text-white hover:text-2xl ease-in-out duration-500'>
            <div className='w-fit m-4 mr-30 mb-0 rounded-xl'>
              <img src={s1} />
            </div>
            <div className='flex flex-row'>
              <span className='w-1/2  flex ml-5 items-center'>Post Operative</span>
              <Lottie animationData={data} className='w-1/2 h-24' />
            </div>
          </div>
          <div className='z-10 border-2 border-blue-800 w-11/12 lg:w-1/3 bg-white m-3 overflow-hidden rounded-3xl  hover:bg-blue-800 hover:text-white hover:text-2xl ease-in-out duration-500'>
            <div className='w-fit m-4 mr-30 mb-0 rounded-xl'>
              <img src={s5} />
            </div>
            <div className='flex flex-row z-10'>
              <span className='w-1/2  flex ml-5 items-center overflow-hidden'>Cardic Rehabiltation After</span>
              <Lottie animationData={data} className='w-1/2 h-24' />
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row z-10 text-xl'>
        <div className='border-2 border-blue-800 w-11/12 lg:w-1/3 bg-white m-3 overflow-hidden rounded-3xl  hover:bg-blue-800 hover:text-white hover:text-2xl ease-in-out duration-500'>
            <div className='w-fit m-4 mr-30 mb-0 rounded-xl'>
              <img src={s2} />
            </div>
            <div className='flex flex-row z-10'>
              <span className='w-1/2  flex ml-5 items-center'>Neurological</span>
              <Lottie animationData={data} className='w-1/2 h-24' />
            </div>
          </div>
          <div className='border-2 border-blue-800 w-11/12 lg:w-1/3 bg-white m-3 overflow-hidden rounded-3xl  hover:bg-blue-800 hover:text-white hover:text-2xl ease-in-out duration-500'>
            <div className='w-fit m-4 mr-30 mb-0 rounded-xl'>
              <img src={s3} />
            </div>
            <div className='flex flex-row z-10'>
              <span className='w-1/2  flex ml-5 items-center'>Sports Injuries</span>
              <Lottie animationData={data} className='w-1/2 h-24' />
            </div>
          </div>
          <div className='border-2 border-blue-800 w-11/12 lg:w-1/3 bg-white m-3 overflow-hidden rounded-3xl  hover:bg-blue-800 hover:text-white hover:text-2xl ease-in-out duration-500'>
            <div className='w-fit m-4 mr-30 mb-0 rounded-xl'>
              <img src={s6} />
            </div>
            <div className='flex flex-row z-10'>
              <span className='w-1/2  flex ml-5 items-center'>Others</span>
              <Lottie animationData={data} className='w-1/2 h-24' />
            </div>
          </div>
        </div>
        </Link>
      </div>
    </div>

  </>
  )
}

export default Services