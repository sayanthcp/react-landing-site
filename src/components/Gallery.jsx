import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1280] m-auto w-full px-4 py-16'>
        <h2 className='text-center p-4 text-2xl font-semibold text-gray-700'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1596101300849-9dac400239c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzczfHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            

            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1516370873344-fb7c61054fa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>

            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1558281050-4c33200099c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzEyfHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>

            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>

            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1503516459261-40c66117780a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzcxfHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>

        </div>
      
    </div>
  )
}

export default Gallery
