import { Camera, Star, Settings, Brush, Globe,Heart } from "lucide-react";

const features = [
  {
    icon: <Camera className="w-8 h-8 text-pink-500" />,
    title: "The Best Wedding Photographers in Kerala",
    description:
      "Trusted by countless couples for delivering unmatched quality.",
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-500" />,
    title: "Expertise in Various Styles",
    description:
      "Whether you prefer traditional, candid, or documentary photography, our team delivers it with precision.",
  },
  {
    icon: <Settings className="w-8 h-8 text-blue-500" />,
    title: "Tailored Services",
    description:
      "Every shoot is customized to meet your preferences and vision.",
  },
  {
    icon: <Brush className="w-8 h-8 text-green-500" />,
    title: "Creative Excellence",
    description:
      "Our professional wedding photographers are skilled in using the latest techniques to create stunning photos and videos.",
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-500" />,
    title: "Destination Weddings",
    description:
      "Whether you’re planning a wedding in the heart of Kerala or abroad, we’re ready to bring your vision to life.",
  },
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "Memorable Moments",
    description:
      "We capture emotions and moments that last a lifetime, making your wedding truly unforgettable.",
  },
];

const Choose = () => {
  return (
    <section className="py-12 ">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-center mb-3 text-2xl capitalize text-brown mt-2">
          <img
            src="https://moments-host.surge.sh/images/Vector%202.png"
            alt="Left Vector"
          />
          <span className="mx-2 text-sm md:text-2xl  sm:mx-3">Why Choose MM Weddings?</span>
          <img
            src="https://moments-host.surge.sh/images/Vector%201.png"
            alt="Right Vector"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
