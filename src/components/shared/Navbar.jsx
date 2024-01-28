import React from 'react'
import logo from '../assets/logo1.png'
import { Link } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { useState, useEffect,Fragment} from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate=useNavigate()
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  
  return (
    <div className='bg-gray-100  w-screen h-15 flex flex-col md:flex-row justify-center place-content-center md:justify-between'>
      <div className='w-full md:w-1/5 flex justify-center'>

        <img src={logo} className='h-20 ml-5 w-4/5 md:w-full ' />
      </div>
      {windowWidth>900 ?
        <div className='flex flex-row space-x-10 justify-center text-xl items-center mr-20 font-medium '>
          <Link to="/" className='hover:text-sky-800 hover:text-2xl overflow-hidden ease-in-out duration-300'>Home</Link>
          <Link to="/about" className='hover:text-sky-800 hover:text-2xl overflow-hidden ease-in-out duration-300'>About</Link>
          <Link to="/services" className='hover:text-sky-800 hover:text-2xl overflow-hidden ease-in-out duration-300'>Services</Link>
          <Link to="/team" className='hover:text-sky-800 hover:text-2xl overflow-hidden ease-in-out duration-300'>Team</Link>
          <Link to="/contact" className='hover:text-sky-800 hover:text-2xl overflow-hidden ease-in-out duration-300'>Contact</Link>

        </div> :
        
        <Menu as="div" className="w-full text-center overflow-hidden flex justify-center sm:justify-end z-30">
					<div>
						<Menu.Button className="m-5 bg-white justify-center flex text-sm  focus:outline-none focus:ring-2 ">
							
              <MenuIcon style={{fontSize:"2.5rem"}}/>
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className="overflow-hidden mt-20 z-30 absolute right-0 w-full rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
							<Menu.Item className="z-10">
								{({ active }) => (
									<div
										onClick={() => navigate('/')}
										className={classNames(
											active && 'text-sky-800 text-2xl duration-500 ease-in-out',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										Home
									</div>
								)}
							</Menu.Item>
							<Menu.Item className="z-10">
								{({ active }) => (
									<div
										onClick={() => navigate('/about')}
										className={classNames(
											active && 'text-sky-800 text-2xl duration-500 ease-in-out',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										About
									</div>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<div
										onClick={() => navigate('/services')}
										className={classNames(
											active && 'text-sky-800 text-2xl duration-500 ease-in-out',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										Services
									</div>
								)}
							</Menu.Item>
              <Menu.Item>
								{({ active }) => (
									<div
										onClick={() => navigate('/team')}
										className={classNames(
											active && 'text-sky-800 text-2xl duration-500 ease-in-out',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										Team
									</div>
								)}
							</Menu.Item>
              <Menu.Item className="z-30">
								{({ active }) => (
									<div
										onClick={() => navigate('/contact')}
										className={classNames(
											active && 'text-sky-800 text-2xl duration-500 ease-in-out',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										Contact
									</div>
								)}
							</Menu.Item>
						
						</Menu.Items>
					</Transition>
				</Menu>
        
      }
    </div>
  )
}

export default Navbar