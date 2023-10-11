import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h=[90vh]'>
        <img src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" className='w-full h-screen object-cover'/>
        <div className='max-w-[1280px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='text-3xl font-bold'>Find Your Special Trip</h1>
                <h2 className='text-3xl font-bold mb-3'>With Weekaway</h2>
                <p className='text-semibold bg-transparent/30 rounded-xl p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sapiente pariatur ut neque rem perspiciatis, necessitatibus aut quis! Quia doloremque consequatur provident? Id, temporibus fugit.</p>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
