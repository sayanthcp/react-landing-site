import React from 'react'
import { BsChatSquareDots } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='max-w-[1280px] m-auto w-full'>
      <div className='flex items-center justify-center border-t-4 p-4'>
        <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mx-2'/>
        <h1 className='text-3xl font-bold text-gray-700'>Weekaway</h1>
        <p>&copy;</p>
      </div>
    </div>
  )
}

export default Footer
