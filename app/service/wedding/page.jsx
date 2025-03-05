import React from 'react'
import HeaderOne from '@/layouts/heders/HeaderOne'
import Footer from '@/layouts/footers/FooterOne'
import Image from 'next/image'
import img1 from '@/public/img/wedding/IMG_0886.JPG'
import img2 from '@/public/img/wedding/IMG_8303.JPG'
import img3 from '@/public/img/wedding/IMG_9513.JPG'
import Grid from '@/components/service/weedding/Grid'
const page = () => {
  return (
    <div>
        <HeaderOne/>
        <div className=" py-16 flex flex-col items-center mt-2">
      <div className="relative flex items-center w-full max-w-6xl">

        {/* Image Cards Container */}
        <div className="flex justify-center gap-6 w-full px-12">
          {/* First Image (Large) */}
          <div className="md:w-1/3 ">
            <Image
              src={img1}
              width={400}
              height={500}
              alt="Couple 1"
              className=" w-full object-cover"
              placeholder="blur" 
            />
          </div>

          {/* Second Image (Smaller) */}
          <div className="md:w-1/4 ">
            <Image
              src={img2}
              width={300}
              height={400}
              alt="Couple 2"
              className=" w-full object-cover"
              placeholder="blur" 
            />
            <h2 className="md:text-6xl text-lg font-garamond text-center font-light  mt-10">WEDDING STORIE</h2>
            <p className='text-xs font-extralight font-mono text-center hidden md:flex'>"Our wedding photography services beautifully capture every moment of your special day, preserving emotions, joy, and elegance. From the bride’s radiant smile to heartfelt tears, we tell your love story through vibrant and timeless images."</p>

          </div>

          {/* Third Image (Large) */}
          <div className="md:w-1/3 ">
            <Image
              src={img1}
              width={400}
              height={500}
              alt="Couple 3"
              className=" w-full object-cover"
              placeholder="blur" 
            />
          </div>
        </div>
      </div>
    </div>  
    <Grid/>
        <Footer/>
    </div>
  ) 
}

export default page