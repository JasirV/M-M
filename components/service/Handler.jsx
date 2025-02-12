import React from "react";
import WeddingPhotography from "@/components/service/WeddingPhotography";
import Img1 from "@/public/img/servicePhotography/IMG_6747.JPG";
import Img2 from "@/public/img/servicePhotography/IMG_4981.JPG";
import Img3 from "@/public/img/servicePhotography/IMG_4729.JPG";
const Handler = () => {
  const weddingServices = [
    {
      heading: "Wedding Photography",
      description:
        "Our wedding photography services beautifully capture every moment of your special day, preserving emotions, joy, and elegance. From the bride’s radiant smile to heartfelt tears, we tell your love story through vibrant and timeless images.",
      img1: Img1,
      img2: Img2,
      img3: Img3,
    },
    {
      heading: "Pre-Wedding Shoots",
      description:
        "Celebrate your journey to the altar with creative pre-wedding shoots. Whether it's scenic landscapes in Kerala or a themed setup, we design each session to reflect your love story in a unique and captivating way.",
      img1: Img1,
      img2: Img2,
      img3: Img3,
    },
    {
      heading: "Candid Photography",
      description:
        "Our candid wedding photographers specialize in capturing genuine, unguarded moments. From spontaneous laughter to quiet glances, we ensure your wedding album is filled with natural and heartfelt emotions.",
      img1: Img1,
      img2: Img2,
      img3: Img3,
    },
    {
      heading: "Wedding Videography",
      description:
        "Relive your wedding day with cinematic-quality videography. Our team captures every detail, from vows to dance, turning your special moments into a breathtaking visual masterpiece.",
      img1: Img1,
      img2: Img2,
      img3: Img3,
    },
    {
      heading: "Destination Weddings",
      description:
        "Planning a destination wedding? Whether in Kerala or abroad, we ensure every magical moment is captured beautifully. From exotic beaches to royal palaces, our team brings your dream wedding to life through stunning imagery.",
      img1: Img1,
      img2: Img2,
      img3: Img3,
    },
  ];

  return (
    <div>
      {weddingServices?.map((item, index) => (
        <div key={index}>
          <WeddingPhotography {...item} index={index} />
        </div>
      ))}
    </div>
  );
};

export default Handler;
