import Image from 'next/image';
import React from 'react';

const WeddingPhotography = ({ heading, img1, img2, img3, description, index }) => {
  return (
    <div className={`w-full flex flex-col md:flex-row mt-10 items-center py-10 gap-10 justify-center p-4 px-6 md:px-20 ${index % 2 === 0 ? ' ' : 'md:flex-row-reverse text-white'}`}
    style={{
      backgroundImage: index % 2 !== 0 ? 'url("https://i.pinimg.com/originals/af/c8/cc/afc8cc99d1636140609ca586a4b67f9b.jpg")' : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      
      {/* Heading */}
      <div className="w-full md:w-1/3 text-center md:text-left">
        <p className="text-3xl md:text-7xl font-bold font-garamond">{heading}</p>
        <p className="w-11/12 md:w-4/5 leading-6 md:leading-7 text-sm md:text-base font-light font-garamond mt-2">
          {description}
        </p>
      </div>

      {/* Image Group */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 justify-center">
        <div className="w-[200px] h-[320px] md:w-[280px] md:h-[450px] rounded-full relative">
          <Image src={img1} alt="Wedding Image 1" fill className={`object-cover ${index % 2 === 0 ? 'rounded-full' : 'rounded-lg'}`} />
        </div>
        <div className="w-[200px] h-[320px] md:w-[280px] md:h-[450px] relative">
          <Image src={img2} alt="Wedding Image 2" fill className={`object-cover ${index % 2 === 0 ? 'rounded-full' : 'rounded-lg'}`} />
        </div>
        <div className="w-[200px] h-[320px] md:w-[280px] md:h-[450px] relative">
          <Image src={img3} alt="Wedding Image 3" fill className={`object-cover ${index % 2 === 0 ? 'rounded-full' : 'rounded-lg'}`} />
        </div>
      </div>

    </div>
  );
};

export default WeddingPhotography;
