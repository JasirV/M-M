"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Img2 from "@/public/img/instagramCarousel/IMG_0053.JPG";
import Img1 from "@/public/img/instagramCarousel/IMG_0040.JPG";
import Img3 from "@/public/img/instagramCarousel/IMG_0136.JPG";
import Img4 from "@/public/img/instagramCarousel/IMG_0886.JPG";
import Img5 from "@/public/img/instagramCarousel/IMG_3923.JPG";
import Img6 from "@/public/img/instagramCarousel/IMG_4605.JPG";
import Img7 from "@/public/img/instagramCarousel/IMG_4606.JPG";
import Img8 from "@/public/img/instagramCarousel/IMG_4607.JPG";
import Img9 from "@/public/img/instagramCarousel/IMG_4729.JPG";
import Img10 from "@/public/img/instagramCarousel/IMG_4981.JPG";
import Img11 from "@/public/img/instagramCarousel/IMG_6747.JPG";
import Img12 from "@/public/img/instagramCarousel/IMG_7803.JPG";
import Img13 from "@/public/img/instagramCarousel/IMG_8303.JPG";
import Img14 from "@/public/img/instagramCarousel/IMG_8536.JPG";
import Img15 from "@/public/img/instagramCarousel/IMG_8685.JPG";
import Img16 from "@/public/img/instagramCarousel/IMG_9513.JPG";
import { FaInstagram } from "react-icons/fa";
// import axios from "axios";

const InstagramCarousel = () => {
  const [posts, setPosts] = useState([
    {
      media_type: "IMAGE",
      media_url: Img1,
      caption: "Post 1 Caption",
      permalink: "#",
    },
    {
      media_type: "IMAGE",
      media_url: Img2,
      caption: "Post 2 Caption",
      permalink: "#",
    },
    {
      media_type: "IMAGE",
      media_url: Img3,
      caption: "Post 3 Caption",
      permalink: "#",
    },
    {
      media_type: "IMAGE",
      media_url: Img4,
      caption: "Post 4 Caption",
      permalink: "#",
    },
    {
      media_type: "IMAGE",
      media_url: Img5,
      caption: "Post 5 Caption",
      permalink: "#",
    },
    {
      media_type: "IMAGE",
      media_url: Img6,
      caption: "Post 6 Caption",
      permalink: "#",
    },
    {
      media_type: "IMAGE",
      media_url: Img7,
      caption: "Post 7 Caption",
      permalink: "#",
    },
    {
      media_type: "IMAGE",
      media_url: Img8,
      caption: "Post 8 Caption",
      permalink: "#",
    },
    {
      media_type: "IMAGE",
      media_url: Img9,
      caption: "Post 9 Caption",
      permalink: "#",
    },
    {
      media_type: "IMAGE",
      media_url: Img10,
      caption: "Post 10 Caption",
      permalink: "#",
    },
    {
      media_type: "IMAGE",
      media_url: Img11,
      caption: "Post 11 Caption",
      permalink: "#",
    },
    {
      media_type: "IMAGE",
      media_url: Img12,
      caption: "Post 12 Caption",
      permalink: "#",
    },
    {
      media_type: "IMAGE",
      media_url: Img13,
      caption: "Post 13 Caption",
      permalink: "#",
    },
    {
      media_type: "IMAGE",
      media_url: Img14,
      caption: "Post 14 Caption",
      permalink: "#",
    },
    {
      media_type: "IMAGE",
      media_url: Img15,
      caption: "Post 15 Caption",
      permalink: "#",
    },
    {
      media_type: "IMAGE",
      media_url: Img16,
      caption: "Post 16 Caption",
      permalink: "#",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   // Replace with your Instagram access token
  //   const ACCESS_TOKEN = "YOUR_INSTAGRAM_ACCESS_TOKEN";

  //   // Fetch Instagram posts
  //   useEffect(() => {
  //     const fetchInstagramPosts = async () => {
  //       try {
  //         const response = await axios.get(
  //           `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption&access_token=${ACCESS_TOKEN}`
  //         );
  //         setPosts(response.data.data);
  //         setLoading(false);
  //       } catch (err) {
  //         setError(err.message);
  //         setLoading(false);
  //       }
  //     };

  //     fetchInstagramPosts();
  //   }, [ACCESS_TOKEN]);

  if (loading) {
    return (
      <div className="text-center text-lg">Loading Instagram posts...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error fetching Instagram posts: {error}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-5">
      <h2 className="text-2xl font-semibold text-center mb-5">
        Instagram Posts
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500, // Time delay between slides (in ms)
          disableOnInteraction: false, // Keeps autoplay on interaction
        }}
        breakpoints={{
          640: { slidesPerView: 6 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
          <div className="border rounded-lg overflow-hidden  bg-white text-center shadow-md relative group">
            {post.media_type === "IMAGE" && (
              <div className="relative w-full h-96">
                <Image
                  src={post.media_url}
                  alt={post.caption || "Instagram post"}
                  width={500} // Specify the width (adjust as needed)
                  height={300} // Specify the height (adjust as needed)
                  style={{ objectFit: "cover" }}
                  quality={75}
                  className="w-full h-full"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="https://www.sunhome.ru/i/wallpapers/51/razmitii-sine-goluboi-fon.orig.jpg"
                  onError={(e) => {
                    e.target.onerror = null; // Prevents infinite loop
                    e.target.src = "https://via.placeholder.com/500x300"; // Fallback image URL
                  }}
                />
                {/* Instagram icon */}
                <div className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaInstagram size={40} color="white" />
                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InstagramCarousel;
