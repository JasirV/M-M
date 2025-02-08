import React from 'react'
import { GoPerson } from 'react-icons/go'
import { IoCalendarOutline } from 'react-icons/io5'
import { SlCamera } from 'react-icons/sl'

const Additonal = () => {
  return (
    <div className='md:mt-20 mb-20'>
        <div className='flex justify-center '>
            <h3 className='text-xl md:text-5xl font-garamond text-center w-full md:w-3/5'>Over years We are providing excellent services
            to make your events memorable</h3>
        </div>
        <div className='flex justify-center md:gap-20 gap-5 pr-10 pl-10 md:pr-0 md:pl-0 mt-5  md:mt-20'>
            <div className='flex flex-col md:gap-10 gap-2 p-2 justify-center items-center md:w-1/4'>
            <GoPerson className="size-[18px] md:size-[60px]"/>
                <p className='text-[5px] md:text-2xl text-center font-light font-poppins'>Qualified Photographers &
                Videographers</p>
            </div>
            <div className='flex flex-col md:gap-10 gap-2 p-2 justify-center items-center md:w-1/4'>
            <SlCamera  className='font-extralight size-[18px] md:size-[60px]'/>
                <p className='text-[5px] md:text-2xl text-center font-light font-poppins'>All photographers are experts
                in their categories</p>
            </div>
            <div className='flex flex-col md:gap-10 gap-2 p-2 justify-center items-center md:w-1/4 '>
            <IoCalendarOutline  className="size-[18px] md:size-[60px]" />
                <p className='text-[5px] md:text-2xl text-center font-light font-poppins'>Fast, on-time and
                Professional Service</p>
            </div>
        </div>
    </div>
  )
}

export default Additonal