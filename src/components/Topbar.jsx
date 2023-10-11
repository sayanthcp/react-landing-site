import React from 'react'
import {AiFillPhone,AiOutlineClockCircle} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'

const Topbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-2'>
        <div className='flex items-center'>
            <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2' />
            <h1 className='text-3xl font-bold text-gray-700'>Weekaway</h1>
        </div>
        <div className='flex'>
            <div className='hidden md:flex items-center px-6'>
                <AiOutlineClockCircle size={20} className='text-[var(--primary-dark)] mr-2'/>
                <p className='text-gray-700'>9am-5pm</p>
                
            </div>
            <div className='hidden md:flex items-center px-6'>
                <AiFillPhone size={20} className='text-[var(--primary-dark)] mr-2'/>
                <p className='text-gray-700'>01-099-08081</p>
            </div>
            <button>Get a free Quote</button>
        </div>
      
    </div>
  )
}

export default Topbar
