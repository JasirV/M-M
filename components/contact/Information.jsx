import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Information = () => {
  return (
    <div className=" flex flex-col items-center justify-center p-8 bg-white text-black">
      <h1 className="text-4xl font-normal tracking-wide font-garamond uppercase  pb-2 mb-12">
        Contact Information
      </h1>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Head Office */}
        <div className="p-6 border border-black rounded-lg shadow-md flex flex-col items-center text-center">
          <FaMapMarkerAlt className="text-black text-4xl mb-4" />
          <h2 className="text-xl font-normal uppercase font-poppins">Head Office</h2>
          <p className="text-gray-700 font-poppins">Kochi, Kerala</p>
        </div>

        {/* Branch Office */}
        <div className="p-6 border border-black rounded-lg shadow-md flex flex-col items-center text-center">
          <FaMapMarkerAlt className="text-black text-4xl mb-4" />
          <h2 className="text-xl font-normal uppercase font-poppins">Branch Office</h2>
          <p className="text-gray-700 font-poppins">Kuppooth, Palakkad, Kerala</p>
        </div>

        {/* Phone */}
        <div className="p-6 border border-black rounded-lg shadow-md flex flex-col items-center text-center">
          <FaPhoneAlt className="text-black text-4xl mb-4" />
          <h2 className="text-xl font-normal uppercase font-poppins">Phone</h2>
          <p className="text-gray-700 font-poppins">976968968</p>
        </div>

        {/* Email */}
        <div className="p-6 border border-black rounded-lg shadow-md flex flex-col items-center text-center">
          <FaEnvelope className="text-black text-4xl mb-4" />
          <h2 className="text-xl font-normal uppercase font-poppins">Email</h2>
          <p className="text-gray-700 font-poppins">mmweddin@gmail.com</p>
        </div>

      </div>
    </div>
  );
};

export default Information;
