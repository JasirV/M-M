"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa"; // Import play icon

const Quality = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* First Section - Hero Image */}
      <div
        className="relative w-full h-screen flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url('https://yandex-images.clstorage.net/Bzf100323/f4b649Iyyuw/vCqVi5OciwNa-9X1degJJqJgwVF1UCPG2bGGCKf4dVlYlFEoVg9-fABLEvxRnPHtpZe4Iks0ukdod34OX9g6YK0ok0xHSonCW_6C5TIrTDrr6MqY-938zxE-3k8m_ucbWoWROEEW5Tmc28eh2NsyKuKcabAf6WMYcKJuUISF43Cwvwze1d0CQ1r30mx_pQ27LqjGUriW8ovS_h4HbfSjVlYU274OWKPjld5OaZ7VOi8kXae12Cjsn7ilZpMOBOQxfP7G29KXh0OaPxmiOqcNtWGlhJG223PE2_xTQO9wLZNVnZI7B9en6B1eACwaV3Ej6lymfldtIhGxKemawE2vsTb6DdFamcKMnj_bInClT3fmZAvb8V36x1myGU3sveVY3xtbcIQaL2RfnYwk19Sz6qTVp_LU7a_XfiuonoSFaDR4sYbVUJ-Az5n11SP26wH8ZawI0DmSuAgZPV5Maris0NQbFToIE6Yk0d4D6x9WNSMjECd90yCimTur51jLBKW8cr7EkZOTT4ecNFpnPaOLvCbtT1P8V_NEnr5eCiR2ItASHxA_wRDqI12diq3QXLwoaxzpe1SjpdA16ioYDIPifbg8zZyZmopFmPxb43Pgj7Xl5UMVNdAxwRE-FUziOKfXV9iTdceYoqlfE83jHp2w5C6VZ3RTZWUbfizjUcuEp7c7vkVbFxcJA1a_neC_p4Dxb6wBXXmVswNe_1BKpfUsn1YTWLvBXeIjkF3FpNVdfKhvHmh-UGMqk3jq7V6CDydw-r-O1h-UwMweNJhvPO1GP-iiyZmyHTVNE71YCi7wY1jYldOxSpHn4FhTBWIfXztuI53vPJQkL1B9Km5Yiouisvu0itYRXM1HFvTYpj1jxPDpoQfTcN28hlu_1wrsNaMf3NzUtQxV5iHZFMTmkF28o2baKPWVK-vUcCNo2s9LJHryP8ec0VBPg9b3GKo9KwG8ZmmGmXKU_E7a9NUELM')`,
          backgroundSize: "cover",
          backgroundPosition: `center ${offsetY * 0.5}px`, // Parallax Effect
        }}
      >
        <div className="w-full flex flex-col items-center justify-center gap-20">
          <div className="font-garamond font-light text:xl md:text-6xl">
            <h3>Wedding Highlights in Kerala</h3>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-center px-20 gap-8 mx-10">
            {/* Thumbnail container */}
            {[...Array(3)].map((_, index) => (
              <div key={index} className="relative w-full h-0 pb-[70%] md:pb-[20%] cursor-pointer">
                <Image
                  src={
                    "https://digital.ihg.com/is/image/ihg/crowne-plaza-new-delhi-6332359191-4x3"
                  }
                  alt="Crowne Plaza New Delhi"
                  layout="fill"
                  objectFit="cover" // Ensures image covers the area
                  placeholder="blur" 
                />
                {/* Play button overlay */}
                <div className="w-full  opacity-0 hover:opacity-100 ">
                <div className="absolute top-1/2 left-1/2 transform opacity-0 hover:opacity-100 bg-white/50 flex items-center justify-center p-2 rounded-full  -translate-x-1/2 -translate-y-1/2 text-white text-4xl">
                  <FaPlay />
                </div>
                <div className="absolute bottom-4 left-1/2 transform  -translate-x-1/2 text-white text-lg font-semibold">
                  <p>Jasme vs Dani</p>
                  <p className="text-sm">Kerala</p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
