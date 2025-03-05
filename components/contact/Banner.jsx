import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="relative h-40 md:h-72 w-full">
          <Image
            src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fcms-image-bucket-production-ap-northeast-1-a7d2.s3.ap-northeast-1.amazonaws.com%2Fimages%2F1%2F7%2F8%2F6%2F36356871-4-eng-GB%2FMicrosoftTeams-image+%2843%29.jpg?width=693&height=390&fit=cover&gravity=faces&dpr=2&quality=medium&source=nar-cms"
            alt="Photo Contest"
            layout="fill"
            objectFit="cover"
            placeholder="blur" 
          />
          {/* Centered "about" text */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40  flex-col">
            <p className="text-white text-xl md:text-7xl font-garamond font-bold">Contact Us</p>
            <p className="text-white font-garamond  text-sm text-center md:w-full w-3/4   md:text-xl bg-opacity-10">MM Photography & Cinematography. We love what we do and we do it with love...</p>
          </div>
        </div>
  )
}

export default Banner