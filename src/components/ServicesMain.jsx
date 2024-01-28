import React from 'react'
import { styled } from '@mui/material/styles';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Lottie from 'lottie-react';
import data from './assets/ser.json'
import s1 from './assets/s1.jpg'
import s2 from './assets/s2.jpg'
import s3 from './assets/s3.jpg'
import s4 from './assets/s4.jpg'
import s5 from './assets/s5.jpg'
import s6 from './assets/s6.jpg'

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

const ServicesMain = () => {

    return (
        <div className='flex flex-col text-center relative opacity-100'>
            <Lottie animationData={data} className='absolute h-full w-full opacity-20'/>
            <div className='flex flex-col lg:flex-row p-10 '>
                <div className='p-4 mr-30 mb-0 rounded-2xl w-full lg:w-1/2'>
                    <img src={s4} className='rounded-xl drop-shadow-lg' />
                </div>
                <div className='flex flex-col w-full lg:w-1/2 m-5'>
                    <span className='text-xl overflow-hidden lg:text-3xl text-sky-800'>MUSCULOSKELETAL</span>
                    <div className='flex flex-col'>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Osteoarthritis Knee</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Frozen Shoulder</span>
                        </div>

                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Tennis Elbow</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Cervical & Lumbar Spondylosis</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Slip Disc / PIVD</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Plantar Fascitis</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Post Fracture Stiffness</span>
                        </div>


                    </div>
                </div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row p-10 bg-sky-100'>
               
                <div className='flex flex-col w-full lg:w-1/2 m-5'>
                    <span className='text-xl overflow-hidden lg:text-3xl text-sky-800'>POST OPERATIVE</span>
                    <div className='flex flex-col'>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Total Knee Replacement</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Total Hip Replacement</span>
                        </div>

                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>ACL Reconstruction</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Tendon Repair</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Neuro - Surgery</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Cardiac - Surgery</span>
                        </div>
                       


                    </div>
                    
                </div>
                <div className='p-4 mr-30 mb-0 rounded-2xl w-full lg:w-1/2'>
                    <img src={s1} className='rounded-xl drop-shadow-lg' />
                </div>
            </div>
            <div className='flex flex-col lg:flex-row p-10 '>
                <div className='p-4 mr-30 mb-0 rounded-2xl w-full lg:w-1/2'>
                    <img src={s5} className='rounded-xl drop-shadow-lg' />
                </div>
                <div className='flex flex-col w-full lg:w-1/2 m-5'>
                    <span className='text-xl overflow-hidden lg:text-3xl text-sky-800'>CARDIAC REHABILTATION AFTER</span>
                    <div className='flex flex-col'>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>CABG</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Value Replacement</span>
                        </div>

                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Coronary Angioplasty</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>PCI & Pacemaker</span>
                        </div>
                        


                    </div>
                </div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row p-10 bg-sky-100 '>
               
                <div className='flex flex-col w-full lg:w-1/2 m-5'>
                    <span className='text-xl overflow-hidden lg:text-3xl text-sky-800'>NEUROLOGICAL</span>
                    <div className='flex flex-col'>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Stroke</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Bell's Palsy</span>
                        </div>

                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Parkinson's Disease</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Spinal Cord Injuries</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Ataxia</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>CP Childe</span>
                        </div>
                       


                    </div>
                    
                </div>
                <div className='p-4 mr-30 mb-0 rounded-2xl w-full lg:w-1/2'>
                    <img src={s2} className='rounded-xl drop-shadow-lg' />
                </div>
            </div>
            <div className='flex flex-col lg:flex-row p-10 '>
                <div className='p-4 mr-30 mb-0 rounded-2xl w-full lg:w-1/2'>
                    <img src={s3} className='rounded-xl drop-shadow-lg' />
                </div>
                <div className='flex flex-col w-full lg:w-1/2 m-5'>
                    <span className='text-xl overflow-hidden lg:text-3xl text-sky-800'>SPORTS INJURIES</span>
                    <div className='flex flex-col'>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Ankle Sprain</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Strain & Sprain</span>
                        </div>

                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Tendinitis</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Shoulder Injuries</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Shin Splint</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>ACL Injurie</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>MCL Injurie</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Tennis or Golf Elbow Injurie</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Rotator Cuff Injurie</span>
                        </div>
                      

                    </div>
                </div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row p-10 bg-sky-100'>
               
                <div className='flex flex-col w-full lg:w-1/2 m-5'>
                    <span className='text-xl overflow-hidden lg:text-3xl text-sky-800'>OTHERS</span>
                    <div className='flex flex-col'>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Neck & Back Pain</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Sciatica</span>
                        </div>
                        <div className='flex flex-row m-2 w-fit'>
                            <ArrowForwardIosIcon />
                            <span className='text-md lg:text-lg'>Cervicogenic Headache</span>
                        </div>

                      


                    </div>
                    
                </div>
                <div className='p-4 mr-30 mb-0 rounded-2xl w-full lg:w-1/2'>
                    <img src={s6} className='rounded-xl drop-shadow-lg' />
                </div>
            </div>

        </div>
    )
}

export default ServicesMain