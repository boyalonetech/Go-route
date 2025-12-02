import Image from "next/image";
import React from "react";

interface Feature {
  id: number;
  title: string;
  icon: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Fast Delivery across 10+ States",
    icon: "/LOGISTICS_icon/delivery_svgrepo.com1.svg",
  },
  {
    id: 2,
    title: "Real-Time Tracking & Transparency",
    icon: "/LOGISTICS_icon/delivery_svgrepo.com.svg",
  },
  {
    id: 3,
    title: "Cost-Effective & Scalable",
    icon: "/LOGISTICS_icon/cost-in-euro-think_svgrepo.com.svg",
  },
  {
    id: 4,
    title: "Certified and Compliant Fleet",
    icon: "/LOGISTICS_icon/logos_aws-certificate-manager.svg",
  },
];

const WhyUsSection: React.FC = () => {
  return (
    <section className="bg-gray-200 px-6 md:px-20 py-16 grid md:grid-cols-2 gap-12 items-center">
      {/* Left content */}
      <div className="flex flex-col gap-10 lg:gap-30">
        <div>
          <p className="text-sm text-gray-600">Why GORoute</p>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Why Businesses Count on Us for Logistics.
          </h1>
          <p className="text-gray-600 text-lg max-w-lg">
            Delivering what matters through smarter operations and trusted
            reliability—faster and safer every time
          </p>
        </div>
        <div className="flex items-center gap-3 ">
          <button className="flex items-center gap-1 lg:gap-3 w-max border border-red-500/50 text-black px-6 py-2 rounded-full hover:bg-red-600 hover:text-white transition">
            Know More About us<span className="text-lg">↗</span>
          </button>{" "}
          <button className="flex items-center gap-3 w-max border border-red-500/50 text-black p-3 rounded-full 0 hover:text-white transition">
            <Image
              src="/LOGISTICS_icon/fa7-solid_truck-fast.svg"
              width={30}
              height={30}
              alt="car"
            />
          </button>{" "}
        </div>
      </div>

      {/* Right content: features grid */}
      <div className="grid grid-cols-2 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center gap-3"
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={100} // smaller, tighter
              height={100}
              className="object-contain"
            />
            <p className="font-medium text-gray-800 text-sm">{feature.title}</p>
          </div>
        ))}
        <div></div>
      </div>
    </section>
  );
};

export default WhyUsSection;
