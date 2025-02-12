"use client";
import { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaClipboardList } from "react-icons/fa";
import Image from "next/image";
import Img from "@/public/img/conatct/IMG_2836.JPG";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    event: "",
    message: "",
  });

  const events = [
    "Wedding Photography",
    "Pre-Wedding Shoots",
    "Candid Photography",
    "Wedding Videography",
    "Destination Weddings",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="md:h-[70vh] bg-black pb-5 md:pb-0 flex flex-col md:flex-row justify-center items-center">
      <div className="md:w-1/2 w-full h-full">
        <Image src={Img} className="w-full h-full object-cover" alt="Contact" />
      </div>
      <div className="md:w-1/2 flex w-11/12  justify-center items-center">
        <form className="  rounded-lg shadow-lg ">
          {/* Heading */}
          <h2 className="text-xs text-center text-white font-garamond  font-bold tmb-6">
            FILE OUT THE FORM AND WELL BE IN TOUCH SOON!
          </h2>

          {/* Description */}
          <p className="text-white text-3xl text-center font-garamond mt-2 mb-6">
            Please mention your requirements here.
          </p>

          {/* Name and Phone in the same row */}
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-light font-poppins text-white mb-1">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-sm bg-transparent text-white placeholder-white focus:outline-none focus:border-gray-500"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-white mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-sm bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500"
              />
            </div>
          </div>

          {/* Email and Event dropdown in the same row */}
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-light font-poppins text-white mb-1">
                E-mail *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-sm bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-light text-white mb-1">
                Select your Event
              </label>
              <select
                name="event"
                value={formData.event}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-sm bg-transparent text-white focus:outline-none focus:border-gray-500"
              >
                <option value="" disabled>
                  Select an event
                </option>
                {events.map((event, index) => (
                  <option key={index} value={event} className="text-gray-400">
                    {event}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Describe your project */}
          <div className="mb-6">
            <label className="block text-sm font-light font-poppins text-white mb-1">
              Describe your project
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-sm bg-transparent text-white placeholder-white focus:outline-none focus:border-gray-500"
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="flex justify-center">
          <button
            type="submit"
            className=" text-center bg-gray-400 text-xs md:text-lg text-white py-2 md:px-2 w-1/3  font-light font-poppins hover:bg-gray-100 hover:text-black transition-colors"
            >
            SEND MESSAGE
          </button>
              </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
