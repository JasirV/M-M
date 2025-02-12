import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="relative h-40 md:h-72 w-full">
          <Image
            src="https://i.pinimg.com/originals/d3/3f/b4/d33fb43ee18af93ad4316c2dea4ccc47.jpg"
            alt="Photo Contest"
            layout="fill"
            objectFit="cover"
          />
          {/* Centered "about" text */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40  flex-col">
            <p className="text-white text-xl md:text-7xl font-garamond font-bold">Services</p>
            <p className="text-white font-garamond  text-sm text-center md:w-full w-3/4   md:text-xl bg-black bg-opacity-10">MM Photography & Cinematography. We love what we do and we do it with love...</p>
          </div>
        </div>
  )
}

export default Banner