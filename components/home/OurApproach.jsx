import Link from 'next/link'
import React from 'react'

const OurApproach = () => {
  return (
    <div className='mt-5'>
        <div className="flex items-center justify-center text-2xl capitalize text-brown mt-2">
      <img src="https://moments-host.surge.sh/images/Vector%202.png" alt="Left Vector" />
      <span className="mx-2 text-sm md:text-2xl  sm:mx-3">Our Approach</span>
      <img src="https://moments-host.surge.sh/images/Vector%201.png" alt="Right Vector" />
    </div>
    <div className='flex justify-center'>
        <p className='font-garamond text-xl md:px-0 px-4 text-center md:text-5xl mt-6 '>Our Approach to Wedding Photography</p>
    </div>
    <div className='flex justify-center mt-5 leading-8 font-poppins mb-3 '>
        <p className='md:w-3/4 w-4/5 '>At MM Weddings, we believe in capturing the essence of your love story. Our approach combines documentary style with fine art, ensuring that every moment is recorded naturally and artistically. Our candid wedding photographers focus on real emotions, from the joyous laughter of friends and family to the tender glances shared by the bride and groom. These unposed, heartfelt moments form the heart of our work</p>
    </div>
    <div className='flex justify-center'>
    <div className=' w-3/4 mt-2 mb-2'>
    <Link href='/contact' >
        <button className='px-6 py-2 rounded-full border-black border-2 hover:bg-black hover:text-white text-sm font-light font-poppins'>ENQUIRE NOW!</button>
    </Link>
    </div>
    </div>
    </div>
  )
}

export default OurApproach