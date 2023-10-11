import React from 'react'

const Booking = () => {
  return (
    <div id='deals' className='max-w-[1280px] m-auto w-full p-4'>
        <form className='lg:flex lg:justify-between w-full items-center'>
            <div className='flex flex-col my-2 py-2'>
                <label>destination</label>
                <select className='lg:w-[300px] md:w-full border rounded-md p-2'>
                    <option >Lizard Island, Great Barrier Reef, Australia</option>
                    <option >Atlantis, Paradise Island, </option>
                    <option >Rayavadee, Krabi, Thailand</option>
                    <option >Capella Ixtapa, Mexico</option>
                    <option>Couples Swept Away, Negril, Jamaica</option>
                    <option>The Nam Hai, Hoi An, Vietnam</option>
                    <option>Le Sereno, St. Barts</option>
                </select>
            </div>
            <div className='flex w-full'>
                <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                    <label>check-in</label>
                    <input className='border rounded-md p-2' type="date" />
                </div>
                <div className='flex flex-col w-full lg:max-w-[250px my-2 p-2'>
                    <label>check-out</label>
                    <input className='border rounded-md p-2' type="date" />
                </div>
            </div>
            <div className='flex flex-col my-2 p-2 w-full'>
                <label>search</label>
                <button className='w-full'>rates & availabilities</button>
            </div>
        </form>
      
    </div>
  )
}

export default Booking
