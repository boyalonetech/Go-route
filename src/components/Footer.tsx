import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3A2424] text-white px-6 md:px-20 py-12">
      <div className="grid md:grid-cols-4 gap-12">
        {/* Logo & Newsletter */}
        <div className="flex flex-col gap-6">
          <span className="text-red-500 text-3xl">
            <Image
              src={`/LOGO_foot.png`}
              height={170}
              width={170}
              alt="/"
              className=""
            />
          </span>{" "}
          <p className="text-gray-200 max-w-xs">
            Stay updated with our latest news and logistics insights.
          </p>
          <div className="flex items-center flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full w-full  ring-1 ring-white placeholder:text-white/60 text-white/90"
            />
            <div className="flex justify-start items-center  w-full gap-4">
              {" "}
              <button className="border border-red-500/50 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition">
                Subscribe
              </button>
              <button className="border border-red-500/50 p-2 h-12 w-12 rounded-full hover:bg-red-500 hover:text-white transition">
                <Image
                  src="/LOGISTICS_icon/fa7-solid_truck-fast-1.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="scale-70"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">Contact</h3>
          <p>info@GoRoute.com</p>
          <p>nigeria@GoRoute.com</p>
          <p>+234 806 587 6439</p>
          <p>+234 906 590 6439</p>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">Services</h3>
          <p>Home delivery</p>
          <p>Industries</p>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">Company</h3>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-12 border-t border-gray-600 pt-6">
        <h3 className="font-semibold text-lg mb-3">Contact</h3>
        <div className="flex gap-6 text-gray-200">
          <a href="#" className="hover:text-red-400 transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-red-400 transition">
            WhatsApp
          </a>
          <a href="#" className="hover:text-red-400 transition">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
