import React from 'react'
import Contact from './Contact'

const ContactMain = () => {
  return (
    <div className='flex flex-col'>
    <Contact/>
    <div className='flex flex-col w-full justify-items-center text-center m-4'>
        <span className='mb-5 text-2xl lg:text-3xl text-gray-400 overflow-hidden'> Navigate to our Clinic</span>
        <p><iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4079286734327!2d77.06641227395681!3d28.587536686125357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05160e8d86e5%3A0x2615f0502482cb8c!2sProaktive%20Physiotherapy!5e0!3m2!1sen!2sin!4v1697386878890!5m2!1sen!2sin"
        className='w-full' height="600px" style={{border:'0px'}} allowfullscreen="" 
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
    </div>
    </div>
  )
}

export default ContactMain