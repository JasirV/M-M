"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import the Image component from Next.js

// Local image (placed in the public folder)
import Img1 from "@/public/img/carouselHome/IMG_1606.JPG";
import Img2 from "@/public/img/carouselHome/IMG_5526.JPG";
import Img3 from "@/public/img/carouselHome/IMG_8678.JPG";
import Link from "next/link";


const carouselItems = [
  {
    id: 1,
    image: Img1, // Local image path
    heading: "Enduring Unions",
    description: "Candid wedding Photographer In Kerala",
  },
  {
    id: 2,
    image: Img2,
    heading: "Destination Wedding",
    description: "Destination Wedding Photography In Kerala ",
  },
  {
    id: 3,
    image: Img3, // Remote image URL
    heading: "Uniquely Exotic",
    description: "Best Save The Date Photographer In Kerala",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden md:rounded-2xl rounded-b-2xl ">
      {/* Carousel Slides */}
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={item.image}
              className="md:rounded-2xl rounded-b-2xl"
              alt={`Slide ${item.description}`}
              fill // Fill the parent container
              style={{ objectFit: "cover" }} // Ensure the image covers the entire area
              quality={100} // Adjust image quality
              priority={index === 0} // Prioritize loading the first image
            />
          </div>

          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Centered Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <p className="font-garamond md:text-8xl text-5xl font-light h-[88px] tracking-normal leading-[44px] mb-3 md:mb-[25px] mx-[15.7px] text-center">
              {item.heading}
            </p>
            <p className="text-sm md:text-xl font-poppins">
              {item.description}
            </p>
            <Link href='/about'>
            <button className="md:mt-5 font-garamond mt-4 px-4 md:px-6 py-2 bg-white text-black text:sm  md:text-lg font-medium rounded-full transition-all duration-300 ease-in-out transform hover:bg-black hover:text-white  hover:scale-105 active:scale-95">
              Show more
            </button>
            </Link>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
