import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <div className='flex flex-col text-center lg:text-start'>
            <div className=' bg-blue-950 flex flex-col lg:flex-row p-10 text-gray-300 '>
                <div className='w-full lg:w-1/3 flex flex-col'>
                    <div className='text-3xl overflow-hidden m-3'>
                        <span>ProAktive</span><br />
                        <span>PhysioTheraphy</span>
                    </div>
                    <div className='text-lg  overflow-hidden mt-5'>
                        <span className='text-blue-500 font-extralight'>Clinic Adress</span><br />
                        <span className='font-mono hover:text-blue-500'>A1021 plam extn maxfort school </span><br />
                        <span className='font-mono hover:text-blue-500'>near Don Bosco House </span><br />
                        <span className='font-mono hover:text-blue-500'>New Delhi 110075</span><br />
                        <Link><span className='mt-20 text-blue-500'>View on Map</span></Link>
                    </div>
                </div>
                <div className='w-full lg:w-1/3 m-3 flex flex-row mt-5'>
                    <div className='w-full text-lg overflow-hidden'>
                        <span className='text-blue-500 font-extralight'>Information</span><br />
                        <Link to="/" ><span className='font-mono hover:text-blue-500'>Home</span><br /></Link>
                        <Link to="/about"><span className='font-mono hover:text-blue-500'>About Us</span><br /></Link>
                        <Link to="/contact"><span className='font-mono hover:text-blue-500'>Contact US</span><br /></Link>
                        <Link to="/team"><span className='font-mono hover:text-blue-500'>Team</span><br /></Link>
                        
                    </div>
                    <div className='w-full text-lg overflow-hidden'>
                        <span className='text-blue-500 font-extralight'>Our Services</span><br />
                        <span className='font-mono hover:text-blue-500'>Musculoskeletal</span><br />
                        <span className='font-mono hover:text-blue-500'>Post Operative</span><br />
                        <span className='font-mono hover:text-blue-500'>Cardic Rehabiltation After</span><br />
                        <span className='font-mono hover:text-blue-500'>Neurological</span><br />
                        <span className='font-mono hover:text-blue-500'>Sports Injuries</span><br />
                     
                    </div>
                </div>
                <div className='w-full text-lg lg:w-1/3  m-3 text-center flex flex-col mt-5'>
                    <span className='text-xl text-blue-500'>Connect</span>
                    <div className='flex flex-row justify-center space-x-10 mt-5'>
                        <FacebookIcon style={{ fontSize: "3rem" }} className='text-blue-500' />
                        <InstagramIcon style={{ fontSize: "3rem" }} className='text-red-500' />
                    </div>
                    <div className='flex flex-row justify-center space-x-10 '>
                        <TwitterIcon style={{ fontSize: "3rem" }} className='text-sky-300' />
                        <WhatsAppIcon style={{ fontSize: "3rem" }} className='text-green-500' />
                    </div>
                </div>
            </div>
            <div className='h-8 bg-gray-200 text-center flex flex-col lg:flex-row justify-between text-md'>
                <span>Copyright © ProAktive Physiotherapy Centre | All rights reserved</span>
                <Link to=""><span>WebDesign & WebDevlopment:Aniket</span></Link>
            </div>
        </div>
    )
}

export default Footer