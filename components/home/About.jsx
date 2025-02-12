import Image from 'next/image'
import React from 'react'
import Img from "@/public/img/about/IMG_0809.JPG";
import Link from "next/link";
const About = () => {
  return (
    <div className='mt-10'>
        <div className='flex justify-center'>
        <p className='font-garamond md:text-5xl text-xl mt-4'>About Company</p>
        </div>
    <div className="flex items-center justify-center text-2xl capitalize text-brown mt-2">
      <img src="https://moments-host.surge.sh/images/Vector%202.png" alt="Left Vector" />
      <span className="mx-2 text-sm md:text-2xl  sm:mx-3">MM WEDDINGS</span>
      <img src="https://moments-host.surge.sh/images/Vector%201.png" alt="Right Vector" />
    </div>
    <div className='flex items-center md:flex-row flex-col'>
        <div className='md:w-5/12 w-full  md:pl-20 md:pb-20 md:pt-20 md:pr-5 p-5'>
            <Image
                          src={Img}
                          className="md:rounded-2xl rounded-xl"
                          alt={`Slide About Image`}
                        //   fill // Fill the parent container
                        //   style={{ objectFit: "cover" }} // Ensure the image covers the entire area
                          quality={100} // Adjust image quality
                        />
        </div>
        <div className='md:w-7/12 w-full pl-8'>
            <h1 className='font-garamond text-2xl md:text-7xl'>Wedding Photography in Kerala</h1>
            <p className='mt-7 font-poppins md:mr-28 md:text-lg text-sm'>Celebrate your love story with wedding photography in Kerala that captures every cherished detail and emotion of your special day. MM Weddings, recognized as one of the best wedding photographers, specializes in creating timeless memories through a seamless blend of artistry and professionalism. Whether it’s candid shots, pre-wedding shoots, or cinematic videography, we ensure that your unique love story is beautifully told</p>
            <Link href="/contact">
            <button className='font-light font-poppins text-sm mt-5 outline-black border-black border-2 px-4 py-2 md:px-6 md:py-3 shadow-sm rounded-full ease-linear hover:bg-black hover:text-white'>Book Now</button>
            </Link>
        </div>
    </div>
        
    </div>
  )
}

export default About