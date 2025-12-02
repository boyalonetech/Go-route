"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update lastScrollY state
      setLastScrollY(currentScrollY);

      console.log("Scroll Y:", currentScrollY); // For debugging
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <section className="bg-white lg:h-screen pb-10 px-6 md:px-16 flex flex-col items-center">
      {/* Heading */}
      <div className={`transform-3d duration-300 text-center max-w-2xl mt-12`}>
        <h1
          className={` text-4xl md:text-5xl  font-bold leading-tight text-black`}
        >
          From Pickup to <span className="text-red-600">Drop-off</span>, <br />{" "}
          Done Right
        </h1>
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="w-3 h-3 border-2 border-red-600 rounded-full"></span>
          <p className="text-lg font-medium text-black">
            Across the whole Nigeria
          </p>
        </div>
        <p className="text-gray-600 mt-2">
          Dependable transport, live tracking, and logistics designed around
          your business.
        </p>
        {/* Buttons */}
        <div className={`flex justify-center gap-4 mt-6`}>
          <button className="border border-black text-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition">
            Learn More
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md">
            Download App
          </button>
        </div>
      </div>

      {/* Center Section */}
      <div className="mt-16 flex flex-col md:flex-row gap-15 justify-between items-center relative">
        {/* Left Card */}
        <div
          className={`w-80 shadow-md rounded-2xl p-4 bg-white transform-3d  duration-900 ${
            lastScrollY > 50 ? "lg:-translate-x-20 opacity-80" : ""
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/Frame 24.png"
              alt="user"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h3 className="font-semibold">Nwoko Elvis</h3>
          </div>
          <p className="text-gray-700 text-sm">
            GoRoute the best logistics service I&apos;ve used! Smooth pickup,
            real-time tracking, and on-time delivery every single time. Highly
            recommend!
          </p>
        </div>

        {/* Center Icon */}
        <div
          className={`${
            lastScrollY > 100 ? "opacity-0 scale-90" : "opacity-100"
          } duration-1000 transform-3d relative`}
        >
          <div className="w-38 h-38 rounded-full border-4 border-gray-200 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full border-4 border-gray-200 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                <Image
                  src="/LOGISTICS_icon/fa7-solid_truck-fast.svg"
                  alt="truck"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div
          className={`w-80 shadow-md rounded-2xl p-4 bg-white flex-col flex justify-between gap-12 transform-3d duration-1200 ${
            lastScrollY > 50
              ? "lg:-translate-x-180 lg:rotate-360 lg:translate-y-160"
              : "lg:translate-x-0"
          }`}
        >
          <div className="flex w-full justify-between gap-2 mb-3">
            <Image
              src="/man2.png"
              alt="courier"
              width={100}
              height={100}
              className="rounded-md translate-y-10"
            />
            <Image
              src="/man3.png"
              alt="courier"
              width={100}
              height={100}
              className="rounded-md"
            />
            <Image
              src="/man1.png"
              alt="courier"
              width={100}
              height={100}
              className="rounded-md translate-y-10"
            />
          </div>
          <div>
            <h3 className="font-semibold flex items-center gap-3 mb-2">
              <span className="w-7 h-7 ring-2 p-1 ring-red-600 text-white flex items-center justify-center rounded-full text-xs">
                <Image
                  src="/LOGISTICS_icon/fa7-solid_truck-fast.svg"
                  alt="truck"
                  width={50}
                  height={50}
                />
              </span>
              Easy Pickup to Drop-off
            </h3>
            <p className="text-gray-700 text-sm">
              Schedule a convenient pickup right from your doorstep or office,
              and we&apos;ll handle the rest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
