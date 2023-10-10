import React, { useState } from 'react'
import {FaFacebookF,FaTwitter,FaGooglePlusG,FaInstagram,FaBars} from 'react-icons/fa'

const Navbar = () => {
    //state
    const [nav, setNav] = useState(false)

    //------hamburger button----------
    const hamBurgerHandler = () => {
        setNav(!nav)
    }
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute text-white bg-gray-700/80'>
        <ul className=' sm:flex px-4 hidden'>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="#gallery">Gallery</a>
            </li>
            <li>
                <a href="#deals">Deals</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>

        <div className='flex justify-between'>
            <FaFacebookF className='mx-4'/>
            <FaTwitter className='mx-4'/>
            <FaGooglePlusG className='mx-4'/>
            <FaInstagram className='mx-4'/>
        </div>
        {/* hamburger */}
        <div onClick={hamBurgerHandler} className='sm:hidden z-10'>
            <FaBars size={20} className='mr-4 cursor-pointer'/>  
        </div>
        {/* mobile menu */}
        <div className={nav ? 'overflow-y-hidden md:hidden ease-in duration-100 absolute left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col' 
                            : 'absolute h-screen top-0 left-[-100%] ease-in duration-100 '}>
            <ul className='h-full w-full text-center p-12'>
                <li className='text-2xl py-8 hover:text-[var(--primary-dark)]'>
                    <a href="/">Home</a>
                </li> 

                <li className='text-2xl py-8 hover:text-[var(--primary-dark)]'>
                    <a href="#gallery">Gallery</a>
                </li>

                <li className='text-2xl py-8 hover:text-[var(--primary-dark)]'>
                    <a href="#deals">Deals</a>
                </li>

                <li className='text-2xl py-8 hover:text-[var(--primary-dark)]'>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        
      
    </div>
  )
}

export default Navbar
