import React from 'react'

const Activities = () => {
  return (
    <div className='max-w-[1280px] m-auto w-full md:flex mt-[-75px]'>

        <div className='relative p-4'>
          <h3 className='absolute z-9 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white bg-black/20 font-bold p-8'>Resorts</h3>
          <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjByZXNvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="image" 
          className='w-full h-full object-cover border border-white shadow-2xl'
          />
        </div>

        <div className='relative p-4'>
          <h3 className='absolute z-9 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white bg-black/20 font-bold p-8'>Cruises</h3>
          <img src="https://images.unsplash.com/photo-1614690163836-5a20f0bf0ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNydWlzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="image" 
          className='w-full h-full object-cover border border-white shadow-lg'
          />
        </div>

        <div className='relative p-4'>
          <h3 className='absolute z-9 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white bg-black/20 font-bold p-8'>Excursions</h3>
          <img src="https://images.unsplash.com/photo-1560251180-1a0b93970379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhdGVyJTIwZXhjdXJzaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="image" 
          className='w-full h-full object-cover border border-white shadow-lg'
          />
        </div> 
        
    </div>
  )
}

export default Activities
