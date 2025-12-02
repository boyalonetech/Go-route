"use client";

import Image from "next/image";

export default function QuickFacts() {
  return (
    <section className="bg-[#3E2A2A] text-white py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div className="space-y-4 lg:h-[50vh]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 border-2 border-red-600 rounded-full"></span>
            <p className="text-sm">Quick Facts</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium leading-snug">
            Trusted by leading companies across diverse industries.
          </h2>
        </div>

        {/* Right Side Stats */}
        <div className="grid grid-cols-2 gap-8 text-center md:text-left lg:mt-30">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">95.6%</h3>
            <p className="text-sm text-gray-300">On-Time Delivery Rate.</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">24/7</h3>
            <p className="text-sm text-gray-300">Customer Support.</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">+20</h3>
            <p className="text-sm text-gray-300">Locations covered daily.</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">+2.5K</h3>
            <p className="text-sm text-gray-300">Monthly Orders Fulfilled.</p>
          </div>
        </div>
      </div>

      {/* Trucks Row */}
      <div className="mt-16 overflow-hidden relative">
        <div className="flex animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex-shrink-0 px-6">
              <Image
                src="/emojione_delivery-truck@3x.png"
                alt="Delivery Truck"
                width={80}
                height={80}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
          {/* Duplicate row for seamless looping */}
          {[...Array(5)].map((_, i) => (
            <div key={`dup-${i}`} className="flex-shrink-0 px-6">
              <Image
                src="/emojione_delivery-truck@3x.png"
                alt="Delivery Truck"
                width={80}
                height={80}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dashed Road */}
      <div className="mt-4 flex justify-center">
        <div className="w-full h-1 border-t-4 border-dashed border-gray-400"></div>
      </div>
    </section>
  );
}
