import React from 'react'
import Paper from '@mui/material/Paper';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Lottie from 'lottie-react';
import data from './assets/wind.json'
import data1 from './assets/pot.json'
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import SpatialAudioOffIcon from '@mui/icons-material/SpatialAudioOff';
import HomeIcon from '@mui/icons-material/Home';
const Mid = () => {
    return (
        <div className='relative flex flex-col bg-sky-100 md:m-5 mt-0 overflow-hidden rounded-3xl text-center'>
            <Lottie animationData={data1} className='bottom-0 absolute w-screen h-full opacity-30 z-10' />

            <div className='bg-white h-44 overflow-hidden w-screen relative z-0'>
                <Lottie animationData={data} className='left-0 top-0 absolute w-80 h-80 mb-30' />
                <Lottie animationData={data} className='right-0 top-0 absolute w-80 h-80 rotate-180 mb-30' />
            </div>
            <div className=' flex flex-col xl:flex-row p-5 z-20'>
                <div className='flex flex-col w-full xl:w-1/2 '>
                    <span className='text-3xl font-semibold overflow-hidden'>Delivering The Highest Quality Care & Rehabilitation</span><br /><br />
                    <span className='text-xl font-light overflow-hidden text-neutral-400'>Experience personalized healing and expert care at our state-of-the-art physiotherapy clinic, where a dedicated team of skilled professionals tailors comprehensive rehabilitation programs to restore your well-being and empower your journey to optimal health</span>
                </div>
                <div className='flex flex-col xl:flex-row h-full w-full ml-0 xl:ml-10'>
                    <div className='flex flex-row  w-full xl:w-1/2'>
                        <Paper elevation={24} className='h-72 w-1/2 m-3 flex flex-col p-1 text-xl '>
                        <div className='h-1/2 w-full overflow-hidden flex justify-center items-center'>
                            <div className='bg-sky-700 h-32 w-32 mt-2 flex justify-center items-center rounded-full'>
                                <BabyChangingStationIcon style={{ fontSize: '5rem' }} className='text-teal-500' />
                            </div>
                            </div>
                            <div className='h-1/2 w-full flex justify-center items-center content-center'>
                                <span className='overflow-hidden '>Qualified Staff</span>
                            </div>
                        </Paper>
                        <Paper elevation={24} className='h-72 w-1/2 m-3 flex flex-col p-1 text-xl'>
                        <div className='h-1/2 w-full overflow-hidden flex justify-center items-center'>
                            <div className='bg-sky-700 h-32 w-32 mt-2 flex justify-center items-center rounded-full '>
                                <HomeRepairServiceIcon style={{ fontSize: '5rem' }} className='text-teal-500 ' />
                            </div>
                            </div>
                            <div className='h-1/2 w-full flex justify-center items-center content-center'>
                                <span className='overflow-hidden '>Best Facility and Equipment</span>
                            </div>
                        </Paper>
                    </div>
                    <div className='flex flex-row w-full xl:w-1/2'>
                    <Paper elevation={24} className='h-72 w-1/2 m-3 flex flex-col p-1 text-xl '>
                        <div className='h-1/2 w-full overflow-hidden flex justify-center items-center'>
                            <div className='bg-sky-700 h-32 w-32 mt-2 flex justify-center items-center rounded-full'>
                                <BookOnlineIcon style={{ fontSize: '5rem' }} className='text-teal-500 ' />
                            </div>
                            </div>
                            <div className='h-1/2 w-full flex justify-center items-center content-center'>
                                <span className='overflow-hidden '>Ease of Appointment and Accessibility</span>
                            </div>
                        </Paper>
                        <Paper elevation={24} className='h-72 w-1/2 m-3 flex flex-col p-1 text-xl'>
                        <div className='h-1/2 w-full overflow-hidden flex justify-center items-center'>
                            <div className='bg-sky-700 h-32 w-32 mt-2 flex justify-center items-center rounded-full '>
                                <HomeIcon style={{ fontSize: '5rem' }} className='text-teal-500' />
                            </div>
                            </div>
                            <div className='h-1/2 w-full flex justify-center items-center content-center'>
                                <span className='overflow-hidden '>PhysioTheraphy at Home</span>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
            {/* <div className='relative h-56 overflow-hidden'>
            <Lottie animationData={data1} className='left-0 top-0 absolute w-56 h-56 mb-30'/>

            </div> */}

        </div>
    )
}

export default Mid