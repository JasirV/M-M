import Image from 'next/image';
import React from 'react'
import img1 from '@/public/img/service/IMG_0136.JPG'
import img2 from '@/public/img/service/IMG_4605.JPG'
import img3 from '@/public/img/service/IMG_5527.JPG'
import img4 from '@/public/img/service/IMG_0136.JPG'
const Grid = () => {
    const items = [
        { img: img1, title: "DISHA & RONAK", subtitle: "Destination: Bangalore" },
        { img:img2, title: "YAMI & GURU", subtitle: "Destination: Chennai" },
        { img: img3, title: "SHERLIN & LINAKAR", subtitle: "Destination: Fort Kochi" },
        { img:img4, title: "ANNA & JOHN", subtitle: "Destination: Goa" },
      ];
    
      return (
        <div className=" p-10 px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div key={index} className=" overflow-hidden  flex flex-col justify-center items-center">
            <div className="relative w-[280px] h-[220px] overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4 text-center flex flex-col justify-center  w-full">
              <h3 className="text-lg font-poppins ">{item.title}</h3>
              <p className="text-gray-500 text-xs italic">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Grid