import React from 'react'
import { GoPerson } from 'react-icons/go'
import { IoCalendarOutline } from 'react-icons/io5'
import { SlCamera } from 'react-icons/sl'

const Additonal = () => {
  return (
    <div className='mt-20 mb-20'>
        <div className='flex justify-center '>
            <h3 className='text-5xl font-garamond text-center w-3/5'>Over years We are providing excellent services
            to make your events memorable</h3>
        </div>
        <div className='flex justify-center gap-20 mt-20'>
            <div className='flex flex-col gap-10 p-2 justify-center items-center w-1/4'>
            <GoPerson size={60}/>
                <p className='text-2xl text-center font-light font-poppins'>Qualified Photographers &
                Videographers</p>
            </div>
            <div className='flex flex-col gap-10 p-2 justify-center items-center w-1/4'>
            <SlCamera size={60} className='font-extralight'/>
                <p className='text-2xl text-center font-light font-poppins'>All photographers are experts
                in their categories</p>
            </div>
            <div className='flex flex-col gap-10 p-2 justify-center items-center w-1/4'>
            <IoCalendarOutline size={60} />
                <p className='text-2xl text-center font-light font-poppins'>Fast, on-time and
                Professional Service</p>
            </div>
        </div>
    </div>
  )
}

export default Additonal