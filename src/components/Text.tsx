"use client";
import React, { useEffect, useState } from "react";
import SplitText from "./SplitText";
import { Unbounded } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function Text() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
    setTimeout(() => {
        router.push("/home");
    }, 4500);
  });

  return (
    <section className="flex flex-col">
      <SplitText
        text="Go Route"
        className={`text-6xl font-bold text-center ${
          show ? "opacity-100" : "opacity-0"
        } text-red-600  ${unbounded.className} `}
        delay={120}
        duration={1}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-200px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />

      <Image
        width={300}
        height={300}
        alt="delivery"
        src="/deliver-car.png"
        className={`${
          show ? "-translate-y-0" : "-translate-y-0"
        } md:scale-150 scale-120 animate-text `}
      />
    </section>
  );
}
