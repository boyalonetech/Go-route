"use client";

import Image from "next/image";

export default function ClientsPartners() {
  const logos = [
    {
      id: "1",
      icon: "/LOGISTICS_icon/icon1.svg",
    },
    {
      id: "2",
      icon: "/LOGISTICS_icon/icon3.svg",
    },
    {
      id: "3",
      icon: "/LOGISTICS_icon/icon3.svg",
    },
    {
      id: "4",
      icon: "/LOGISTICS_icon/icon4.svg",
    },
    {
      id: "5",
      icon: "/LOGISTICS_icon/icon5.svg",
    },
    {
      id: "6",
      icon: "/LOGISTICS_icon/icon6.svg",
    },

    {
      id: "7",
      icon: "/LOGISTICS_icon/icon7.svg",
    },
    // {
    //   id: "8",
    //   icon: "/LOGISTICS_icon/icon8.svg",
    // },
  ]; // replace with your actual LOGISTICS_icon/icons

  return (
    <section className="bg-gray-300 py-12 px-6 md:px-16">
      {/* Section Title */}
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 border-2 border-red-600 rounded-full"></span>
          <p className="text-black font-medium">Clients & Partners</p>
        </div>
      </div>

      {/* LOGISTICS_icon/icons Row */}
      <div className="flex items-center justify-center flex-wrap gap-10">
        {logos.map((icon) => (
          <div className="flex-shrink-6" key={icon.id}>
            <Image
              src={icon.icon}
              alt="/"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
