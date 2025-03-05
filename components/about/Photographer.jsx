import Image from "next/image";
import { Camera, Sparkles, MapPin, Film, Aperture } from "lucide-react";
import Imag1 from '@/public/img/photographer/mansoor.jpg'

const photographerDetails = {
  name: "Meet Our Wedding Photographer",
  description:
    "At MM Weddings, we are proud to introduce our lead wedding photographer, a seasoned professional with over a decade of experience in capturing precious moments for couples worldwide.",
  highlights: [
    { icon: <Camera className="w-6 h-6 text-pink-500" />, text: "10+ Years of Experience" },
    { icon: <Sparkles className="w-6 h-6 text-yellow-500" />, text: "Expert in Candid Wedding Photography" },
    { icon: <Film className="w-6 h-6 text-blue-500" />, text: "Cinematic Wedding Videography" },
    { icon: <Aperture className="w-6 h-6 text-green-500" />, text: "Creative & Timeless Storytelling" },
    { icon: <MapPin className="w-6 h-6 text-purple-500" />, text: "Serving Dubai, Kerala & Beyond" },
  ],
  cta: "Explore Portfolio",
};

const Photographer = () => {
  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        {/* Photographer Image */}
        <div className="w-64 h-64 relative">
          <Image
            src={Imag1}
            alt="Wedding Photographer"
            layout="fill"
            className="rounded-full shadow-lg object-cover"
            placeholder="blur" 
          />
        </div>

        {/* Photographer Details */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{photographerDetails.name}</h2>
          <p className="text-gray-600 mb-6">{photographerDetails.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {photographerDetails.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-2">
                {highlight.icon}
                <span className="text-gray-700">{highlight.text}</span>
              </div>
            ))}
          </div>
          <button className="bg-black dark:bg-white dark:text-black text-white px-6 py-2 rounded-full shadow-md  first-letter:  transition">
            {photographerDetails.cta}
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-10 leading-7  text-base font-light font-garamond ">
      <p className="md:w-4/5 w-10/12 ">At MM Weddings, we are proud to introduce our lead wedding photographer, a seasoned professional with over a decade of experience in capturing precious moments for couples around the world. With a deep passion for wedding photography, our photographer excels in telling unique stories through the lens, preserving real emotions and creating timeless memories.
Our photographer’s keen eye for detail and mastery of the latest trends in wedding photography ensure that every shot is exceptional. Specializing in candid wedding photography, they focus on capturing unposed, heartfelt moments that reflect the true essence of your love story. This approach allows couples to feel comfortable and relaxed, resulting in natural and genuine photographs.
Recognized as one of the best wedding photographers in the industry, our photographer is adept at adapting to any wedding style, from intimate ceremonies to grand celebrations. Their expertise extends to pre-wedding shoots, where they create vibrant and creative photo shoots that celebrate your journey to the altar. Whether it’s a casual candid session or a cinematic wedding videography, our photographer ensures a comprehensive and personalized service for every couple.
Operating in various locations, including Dubai, Kerala, and beyond, our team is dedicated to providing an exceptional experience. We prioritize customer satisfaction and comfort, making us the go-to choice for couples seeking a professional wedding photographer who can capture their unique charm and love story.
We invite you to explore our portfolio and discover why our photographer is considered one of the best wedding photographers in the industry. Whether you’re looking for a pre-wedding shoot, a full-day wedding photography package, or simply a photographer who can capture your special moments, MM Weddings is here to bring your vision to life.
</p>
      </div>
    </section>
  );
};

  export default Photographer;
