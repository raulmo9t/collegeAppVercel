import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
// import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const images = [
  // { id: 1, clickable: false, src: hero1 },
  { id: 2, clickable: true, href: "/", src: hero2 },
  // { id: 3, clickable: false, src: hero3 },
  { id: 4, clickable: false, src: hero4 },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [isFading, setIsFading] = useState(false);

  const startTransition = (targetIndex) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrent(targetIndex);
      setNext((targetIndex + 1) % images.length);
      setIsFading(false);
    }, 500);
  };

  const handleNext = () => {
    startTransition((current + 1) % images.length);
  };

  const handlePrev = () => {
    const prevIndex = (current - 1 + images.length) % images.length;
    setNext(current);
    startTransition(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      startTransition((current + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const currentImage = images[current];
  const currentImageSrc = currentImage.src;
  const nextImage = images[next];
  const nextImageSrc = nextImage.src;

  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      <img
        key={currentImage.id}
        src={currentImageSrc}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
        alt=""
      />

      <img
        key={nextImage.id}
        src={nextImageSrc}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
          isFading ? "opacity-100" : "opacity-0"
        }`}
        alt=""
      />

      <div className="absolute top-0 left-0 w-full h-full z-[5] bg-gradient-to-b "></div>

      {/* Optional clickable layer */}
      {currentImage.clickable && (
        <a
          href={currentImage.href}
          className="absolute top-0 left-0 w-full h-full z-10"
        ></a>
      )}

      {/* Manual navigation buttons */}
      <div className="absolute bottom-8 left-[80%] md:left-[90%] lg:left-[90%] transform -translate-x-1/2 flex gap-4 z-20">
        <button
          onClick={handlePrev}
          className="bg-[#8996A0]/50 transition-all hover:bg-black text-white rounded-full p-3 lg:p-6"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="bg-[#8996A0]/50 transition-all hover:bg-black text-white rounded-full p-3 lg:p-6"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
