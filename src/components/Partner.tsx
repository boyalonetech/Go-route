import Image from "next/image";
import React from "react";

const Partner = () => {
  return (
    <section className="py-10 px-4">
      <div className="flex flex-col items-center justify-center  gap-y-15 lg:flex-row lg:justify-between mx-2 lg:mx-10">
        {/* Text */}
        <div className="flex flex-col gap-y-10 ">
          <div className="flex flex-col gap-y-5 max-w-[550px]">
            <h1 className="font-bold text-4xl lg:text-6xl ">
              Become Our Delivery Partner
            </h1>
            <p>
              Thank you for showing interest in becomin out Third-party
              Logistics Partner. we&apos;re thrilled to work with you to provide
              our clients with exceptional service.
            </p>
          </div>
          <div>
            <button className="px-6 p-3 bg-black text-white ">
              Become a Partner
            </button>
          </div>
        </div>

        {/* Image */}
        <div>
          <Image
            src="/img1.png"
            alt=""
            width={600}
            height={600}
            sizes="fill"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Partner;
