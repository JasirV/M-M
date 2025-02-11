'use client'
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Img1 from '@/public/img/carouselHome/IMG_5526.JPG'

const testimonials = [
  {
    quote: "The Best Wedding Photographer We Could Have Chosen!",
    feedback:
      "MM Weddings captured every emotion of our day perfectly. The photos are stunning, and the team’s professionalism was unmatched!",
    name: "Anjali & Ramesh",
    photo: Img1,
    rating: 5,
  },
  {
    quote: "Unforgettable Wedding Memories!",
    feedback:
      "The team’s creativity and attention to detail made our wedding memories truly special. Thank you, MM Weddings!",
    name: "Sneha & Akhil",
    photo: Img1,
    rating: 4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-12  flex flex-col items-center">
      <div className="flex items-center justify-center text-2xl capitalize text-brown mt-2">
      <img src="https://moments-host.surge.sh/images/Vector%202.png" alt="Left Vector" />
      <span className="mx-2 text-sm md:text-2xl  sm:mx-3">Testimonials</span>
      <img src="https://moments-host.surge.sh/images/Vector%201.png" alt="Right Vector" />
    </div>
      <div className="relative w-4/5 md:w-3/5 lg:w-2/3 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 p-6  rounded-lg shadow-lg text-center">
              <img src={testimonial.photo} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-poppins ">{testimonial.quote}</h3>
              <p className=" mt-4 font-garamond">{testimonial.feedback}</p>
              <p className=" mt-2 font-medium font-poppins">- {testimonial.name}</p>
              <div className="flex justify-center mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between w-4/5 md:w-3/5 lg:w-2/3 mt-6">
        <button
          onClick={prevTestimonial}
          className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-300 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextTestimonial}
          className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-300 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
