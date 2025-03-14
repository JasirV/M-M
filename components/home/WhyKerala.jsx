import Link from 'next/link'
import React from 'react'

function WhyKerala() {
  return (
    <div className='mt-12'>
        <div className="flex items-center justify-center text-2xl capitalize text-brown mt-2">
      <img src="https://moments-host.surge.sh/images/Vector%202.png" alt="Left Vector" />
      <span className="mx-2 text-sm md:text-2xl  sm:mx-3">Why Kerala</span>
      <img src="https://moments-host.surge.sh/images/Vector%201.png" alt="Right Vector" />
    </div>
    <div className='flex justify-center'>
        <p className='font-garamond text-xl text-center md:text-5xl mt-6 '>Why Kerala for Your Wedding Photography?</p>
    </div>
    <div className='flex justify-center mt-5 leading-8 font-poppins mb-3 '>
        <p className='w-3/4'>Known as “God’s Own Country,” Kerala offers a stunning backdrop for your wedding. From lush greenery to serene beaches and charming backwaters, every corner of Kerala exudes beauty. Our wedding photographers expertly utilize these breathtaking locations to create timeless pictures and photographs. Whether it’s a traditional temple wedding or a modern destination celebration, Kerala’s charm enhances every frame.</p>
    </div>
    <div className='flex justify-center'>
    <div className='w-4/5 md:w-3/4 mt-2 mb-2'>
    <Link href='/contact'>
        <button className='px-6 py-2 rounded-full border-black dark:border-white border-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-sm font-light font-poppins'>ENQUIRE NO!</button>
    </Link>
    </div>
    </div>
    </div>
  )
}

export default WhyKerala