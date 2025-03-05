import React from "react";
import HeaderOne from "@/layouts/heders/HeaderOne";
import Img1 from "@/public/img/servicePhotography/IMG_6747.JPG";
import Img2 from "@/public/img/servicePhotography/IMG_4981.JPG";
import Img3 from "@/public/img/servicePhotography/IMG_4729.JPG";
import Image from "next/image";
import FooterOne from "@/layouts/footers/FooterOne";
import Grid from "@/components/service/weedding/Grid";
const page = () => {
  const data = {
    description:
      "Celebrate your journey to the altar with creative pre-wedding shoots. Whether it's scenic landscapes in Kerala or a themed setup, we design each session to reflect your love story in a unique and captivating way.",
    img1: {photo:Img1,name:'Mansoor & Noufiya',location:"kuppooth"},
    img2: {photo:Img2,name:"Arun & Sruthi",location:"Ottapalam"},
    img3: {photo:Img3,name:'Arun & Sruthi',location:"Kannur"},
  };
  return (
    <div>
      <HeaderOne />
      <div
        className={`w-full flex flex-col md:flex-row mt-10 items-center py-10 gap-10 justify-center p-4 px-6 md:px-20`}
      >
        {/* Heading */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <p
            className="text-3xl md:text-9xl font-bold font-garamond 
  bg-gradient-to-r from-black to-white dark:from-white dark:to-black 
  text-transparent bg-clip-text"
          >
            SAVE <br /> THE <br /> DATE
          </p>

          <p className="w-11/12 md:w-4/5 leading-6 md:leading-7 text-sm md:text-base font-light font-garamond mt-2">
            {data.description}
          </p>
        </div>

        {/* Image Group */}
        <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 justify-center">
          <div className="w-[200px] h-[320px] md:w-[280px] md:h-[450px] rounded-full relative">
            <Image
              src={data.img1.photo}
              alt="Wedding Image 1"
              fill
              className={`object-cover rounded-full `}
              placeholder="blur" 
            />
          </div>
          <div className="w-[200px] h-[320px] md:w-[280px] md:h-[450px] relative">
            <Image
              src={data.img2.photo}
              alt="Wedding Image 2"
              fill
              className={`object-cover  rounded-full `}
              placeholder="blur" 
            />
          </div>
          <div className="w-[200px] h-[320px] md:w-[280px] md:h-[450px] relative">
            <Image
              src={data.img3.photo}
              alt="Wedding Image 3"
              fill
              className={`object-cover rounded-full `}
              placeholder="blur" 
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-2xl capitalize text-brown mt-2 mb-6 md:mb-0">
      <img src="https://moments-host.surge.sh/images/Vector%202.png" alt="Left Vector" />
      <span className="mx-2 text-sm md:text-4xl  sm:mx-3">Our Drops</span>
      <img src="https://moments-host.surge.sh/images/Vector%201.png" alt="Right Vector" />
    </div>
      <Grid/>
      <FooterOne/>
    </div>
  );
};

export default page;
