import React from "react";
import HeaderOne from "@/layouts/heders/HeaderOne";
import Img1 from "@/public/img/servicePhotography/IMG_6747.JPG";
import Img2 from "@/public/img/servicePhotography/IMG_4981.JPG";
import Img3 from "@/public/img/servicePhotography/IMG_4729.JPG";
import Image from "next/image";
const page = () => {
  const data = {
    description:
      "Celebrate your journey to the altar with creative pre-wedding shoots. Whether it's scenic landscapes in Kerala or a themed setup, we design each session to reflect your love story in a unique and captivating way.",
    img1: Img1,
    img2: Img2,
    img3: Img3,
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
              src={data.img1}
              alt="Wedding Image 1"
              fill
              className={`object-cover rounded-full `}
            />
          </div>
          <div className="w-[200px] h-[320px] md:w-[280px] md:h-[450px] relative">
            <Image
              src={data.img2}
              alt="Wedding Image 2"
              fill
              className={`object-cover  rounded-full `}
            />
          </div>
          <div className="w-[200px] h-[320px] md:w-[280px] md:h-[450px] relative">
            <Image
              src={data.img3}
              alt="Wedding Image 3"
              fill
              className={`object-cover rounded-full `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
