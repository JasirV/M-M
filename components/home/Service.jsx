import Image from 'next/image'
import React from 'react'
import Img1 from '@/public/img/service/IMG_1380.JPG'
import Img2 from '@/public/img/service/IMG_7052.JPG'
import Img3 from '@/public/img/service/IMG_3832.JPG'
import Link from 'next/link'
const Service = () => {
  return (
    <div className=' mt-8'>
        <div className="flex items-center justify-center text-2xl capitalize text-brown mt-2 ">
      <img src="https://moments-host.surge.sh/images/Vector%202.png" alt="Left Vector" />
      <span className="mx-2 text-sm md:text-2xl  sm:mx-3">Services</span>
      <img src="https://moments-host.surge.sh/images/Vector%201.png" alt="Right Vector" />
    </div>
    <div className='flex justify-center'>
        <h2 className='font-garamond mt-2 text-2xl md:text-7xl w-3/5 text-center font-medium '>We are committed to providing the best service</h2>
    </div>
    <div className="flex md:flex-row flex-col justify-center gap-12 mt-10 mb-10">
      {[
        { img: Img1, text: "Pre-Wedding Shoots" },
        { img: Img2, text: "Wedding Photography" },
        { img: Img3, text: "Candid Photography" },
      ].map((item, index) => (
        <div key={index} className="md:w-1/4 md:px-0 px-5 relative group overflow-hidden">
          {/* Image */}
          <Image src={item.img} alt={item.text} className="w-full rounded-lg md:rounded-none h-auto transition-transform duration-300 group-hover:scale-105 " />

          {/* Text (Always Visible) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-[rgba(248,247,247,0.5)] hover:text-white text-center p-4">
            <p className="text-3xl font-poppins font-bold">{item.text}</p>

            {/* Button (Hidden Initially, Visible on Hover) */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3">
              <Link href="/service">
              <button className="px-4 py-2 bg-white text-black font-medium rounded-full hover:bg-black hover:text-white transition">
                Explore
              </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Service