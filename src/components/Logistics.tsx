import Image from "next/image";
import React from "react";

interface Service {
  id: string;
  title: string;
  img: string;
}

const services: Service[] = [
  {
    id: "01",
    title: "Regional Distribution",
    img: "/img1.png",
  },
  {
    id: "02",
    title: "Same-Day & Express Delivery",
    img: "/img2.png",
  },
  {
    id: "03",
    title: "Refrigerated Transport",
    img: "/img3.jpg",
  },
  {
    id: "04",
    title: "Doorstep Pickup & Delivery",
    img: "/man4.png",
  },
];

const LogisticsSection: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-16 grid md:grid-cols-2 gap-12 items-start">
      {/* Left side text */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Smart logistics,
          <br /> made for you.
        </h1>
        <p className="text-gray-500 mt-4 text-lg max-w-md">
          Personalized transport services that ensure your packages arrive
          safely, on time, every time.
        </p>
      </div>

      {/* Right side services */}
      <div className="flex flex-col gap-12">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col gap-3">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <span className="text-red-600 font-bold">● {service.id}</span>
              {service.title}
            </h4>
            <Image
              width={600}
              height={600}
              src={service.img}
              alt={service.title}
              className="rounded-xl shadow-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogisticsSection;
