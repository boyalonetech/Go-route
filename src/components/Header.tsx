"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsOpen(false); // scrolling down → hide nav
        
      } else {
        setIsOpen(false); // scrolling up → show nav
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="w-full fixed top-4 lg:top-0 z-50 left-0">
      <section className="flex items-center mx-2 lg:mx-0 justify-between p-4 lg:p-3 bg-white z-50 shadow-md rounded-2xl  lg:rounded-none ">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/LOGO.png"
            alt="logo"
            className="scale-[0.8] lg:scale-[0.90]"
            width={200}
            height={200}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="lg:flex gap-6 hidden">
          <Link
            className="p-[5px] px-4 hover:text-white font-[300] hover:font-[450] hover:bg-[#C5021C] transition-transform duration-3000 rounded-xl"
            href="/home"
          >
            Home
          </Link>
          <Link
            className="p-[5px] px-4 hover:text-white font-[300] hover:font-[450] hover:bg-[#C5021C] transition-transform duration-3000 rounded-xl"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="p-[5px] px-4 hover:text-white font-[300] hover:font-[450] hover:bg-[#C5021C] transition-transform duration-3000 rounded-xl"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="p-[5px] px-4 hover:text-white font-[300] hover:font-[450] hover:bg-[#C5021C] transition-transform duration-3000 rounded-xl"
            href="/industries"
          >
            Industries
          </Link>
          <Link
            className="p-[5px] px-4 hover:text-white font-[300] hover:font-[450] hover:bg-[#C5021C] transition-transform duration-3000 rounded-xl"
            href="/partner"
          >
            Partner
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="lg:flex justify-between gap-4 mr-2 hidden">
          <button className="p-3 px-4 bg-[#C5021C] text-white rounded-3xl">
            Get a Quote
          </button>
          <button className="p-3 px-4 bg-[#C5021C] text-white rounded-full">
            <Image
              src="/LOGISTICS_icon/fa7-solid_truck-fast-1.svg"
              alt="cart"
              width={20}
              height={20}
            />
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          className="block lg:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={45}
            height={45}
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#C5021C"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </g>
          </svg>
        </button>
      </section>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden mt-2  bg-black/70 shadow-md rounded-xl flex flex-col gap-4 h-screen animate-fade-in"
          onClick={() => setIsOpen(!open)}
        >
          <div
            className={`lg:hidden -mt-1 p-4 bg-white shadow-md rounded-xl flex flex-col gap-4 transition-transform duration-300 ease-in-out ${
              isOpen
                ? "translate-x-0  transition-all duration-3000"
                : "translate-x-110  transition-all duration-3000"
            }`}
            onClick={() => setIsOpen(!open)}
          >
            <Link
              href="/home"
              className="block p-2 px-4 hover:bg-[#C5021C] hover:text-white rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block p-2 px-4 hover:bg-[#C5021C] hover:text-white rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="block p-2 px-4 hover:bg-[#C5021C] hover:text-white rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/industries"
              className="block p-2 px-4 hover:bg-[#C5021C] hover:text-white rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="/partner"
              className="block p-2 px-4 hover:bg-[#C5021C] hover:text-white rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Partner
            </Link>

            <div className="flex flex-col gap-3 mt-3">
              <button className="p-3 px-4 bg-[#C5021C] cursor-pointer text-white rounded-3xl">
                Get a Quote
              </button>
              <button className="p-3 px-4 bg-[#C5021C] text-white rounded-full cursor-pointer flex items-center justify-center">
                <Image
                  src="/LOGISTICS_icon/fa7-solid_truck-fast-1.svg"
                  alt="cart"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
