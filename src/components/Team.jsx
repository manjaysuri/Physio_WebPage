import React from 'react'
import t1 from './assets/t1.jpg'
import t2 from './assets/t2.jpg'
import Lottie from 'lottie-react'
import data from './assets/line.json'
const Team = () => {
    return (<>
        <div className='flex flex-col text-center overflow-hidden relative bg-sky-100 m-5 rounded-3xl'>
            <Lottie animationData={data} className='absolute h-full w-full opacity-40 rotate-90 lg:rotate-0 z-0'/>
            <div className='overflow-hidden'>
                <span className='text-2xl text-neutral-400 '>Meet</span><br />
                <span className='text-5xl '>Our Team</span><br /><br />
                <span className='text-2xl text-neutral-700 '>Alone we Can do so little,together we can do so much</span>

            </div>
            <div className='flex flex-col lg:flex-row overflow-hidden m-5'>
                <div className='w-11/12 lg:w-1/2 flex flex-col m-6 '>
                    <div className='w-full flex justify-center'>
                        <img src={t1} className='h-60 w-60 lg:h-80 lg:w-80 rounded-full border-4 z-10'/>
                    </div>
                    <div className='h-44 w-full mt-5 overflow-hidden'>
                        <span className='text-3xl'>Dr Danish Rajput </span><br/>
                        <span className='text-2xl'>Physiotherapist</span><br/>
                        <span className='text-xl'> (Experience-14+years)</span><br/>
                        <span className='text-lg text-neutral-400 overflow-hidden'>
                            The Body is an incredible machine ,but it requires maintenance.
                        </span>
                    </div>
                </div>
                <div className='w-11/12 lg:w-1/2 flex flex-col m-6 '>
                    <div className='w-full flex justify-center'>
                        <img src={t2} className='h-60 w-60 lg:h-80 lg:w-80 rounded-full border-4 z-10'/>
                    </div>
                    <div className='h-44 w-full mt-5 overflow-hidden'>
                        <span className='text-3xl'>Dr Aqib Rajput </span><br/>
                        <span className='text-2xl'>Physiotherapist</span><br/>
                        <span className='text-xl'> (Experience-2+years)</span><br/>
                        <span className='text-lg text-neutral-400 overflow-hidden'>
                            A body free from nervous tension and fatigue is the ideal shelter provided by nature for housing a 
                            well-balanced mind,fully capable of successfully meeting all the complex problems of modern life.
                        </span>
                    </div>
                </div>
               
            </div>
        </div>
    </>
    )
}

export default Team