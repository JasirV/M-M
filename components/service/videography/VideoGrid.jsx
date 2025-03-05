import Image from 'next/image';
import React from 'react';
import img1 from '@/public/img/service/IMG_0136.JPG';
import img2 from '@/public/img/service/IMG_4605.JPG';
import img3 from '@/public/img/service/IMG_5527.JPG';
import img4 from '@/public/img/service/IMG_0136.JPG';

const VideoGrid = () => {
  const items = [
    { img: img1, title: "DISHA & RONAK", subtitle: "Destination: Bangalore" },
    { img: img2, title: "YAMI & GURU", subtitle: "Destination: Chennai" },
    { img: img3, title: "SHERLIN & LINAKAR", subtitle: "Destination: Fort Kochi" },
    { img: img4, title: "ANNA & JOHN", subtitle: "Destination: Goa" },
    { img: img1, title: "DISHA & RONAK", subtitle: "Destination: Bangalore" },
    { img: img2, title: "YAMI & GURU", subtitle: "Destination: Chennai" },
    { img: img3, title: "SHERLIN & LINAKAR", subtitle: "Destination: Fort Kochi" },
    { img: img4, title: "ANNA & JOHN", subtitle: "Destination: Goa" },
    { img: img1, title: "DISHA & RONAK", subtitle: "Destination: Bangalore" },
    { img: img2, title: "YAMI & GURU", subtitle: "Destination: Chennai" },
    { img: img3, title: "SHERLIN & LINAKAR", subtitle: "Destination: Fort Kochi" },
    { img: img4, title: "ANNA & JOHN", subtitle: "Destination: Goa" },
  ];

  return (
    <div className="p-10 md:px-20 lg:px-40">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Image Wrapper with 16:9 Aspect Ratio */}
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src={item.img}
                alt={item.title}
                fill
                placeholder="blur" 
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* Text Content */}
            <div className="p-4 text-center w-full">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-xs italic">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
