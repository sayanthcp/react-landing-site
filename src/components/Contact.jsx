import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1280px] m-auto p-4'>
        <h1 className='font-bold text-2xl text-center'>Okey Okey Just Email Me</h1>
        <p className='py-2 text-center'>Lets Start a Conversation</p>
        <div className='grid md:grid-cols-2'>
            <img src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="/" className='w-full md:h-full max-h-[500px] p-2 object-cover h-[200px]'/>
            <form>
                <div className='grid md:grid-cols-2'>
                    <input className='border p-2 m-2 bg-gray-100' type="text" placeholder='First'/>
                    <input className='border p-2 m-2 bg-gray-100' type="text" placeholder='Last'/>
                    <input className='border p-2 m-2 bg-gray-100' type="email" placeholder='Email'/>
                    <input className='border p-2 m-2 bg-gray-100' type="tel" placeholder='Phone'/>
                    <input className='col-span-2 border p-2 m-2 bg-gray-100' type="text" placeholder='Address' />
                    <textarea className='col-span-2 p-2 m-2 border bg-gray-100' placeholder='Typing...' cols="30" rows="10"></textarea>
                    <button className='col-span-2 my-2'>Submit</button>
                </div>
            </form>

        </div>
      
    </div>
  )
}

export default Contact
