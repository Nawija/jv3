"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import h1 from "@/public/Images/sesja.jpg";
import h3 from "@/public/Images/sesja2.jpg";
import h4 from "@/public/Images/wyjscie.jpg";

const images = [
  { src: h1, position: "50% 50%" },
  { src: h3, position: "0% 50%" },
  { src: h4, position: "50% 100%" },
];

const Carousel = () => {
  const [isFirstImageLoaded, setIsFirstImageLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    dragSpeed: 0.8,
    slides: { perView: 1 },
    renderMode: "performance",
    mode: "snap",
    slideChanged(slider) {
      const relative = slider.track.details.rel;
      setActiveIndex(relative);
    },
  });

  return (
    <div className="relative w-screen xl:max-w-[1600px] h-[80vh] lg:h-[86vh] mx-auto overflow-hidden">
      {!isFirstImageLoaded && (
        <div className="w-full h-full absolute inset-0 z-10 bg-zinc-200">
          <div className="w-full h-full absolute inset-0 z-10 bg-zinc-400 animate-pulse" />
        </div>
      )}

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider h-full">
        {images.map((image, index) => (
          <div key={index} className="keen-slider__slide relative w-full h-full">
            <Image
              src={image.src}
              alt={`Fotograf ${index + 1}`}
              fill
              className="object-cover transition-opacity duration-500"
              style={{ objectPosition: image.position }}
              quality={85}
              priority={index === 0}
              sizes="100vw"
              onLoad={() => {
                if (index === 0) setIsFirstImageLoaded(true);
              }}
            />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2"
        aria-label="Poprzedni slajd"
      >
        <SlArrowLeft className="text-4xl text-white/80 hover:text-white transition-colors duration-300" />
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2"
        aria-label="Następny slajd"
      >
        <SlArrowRight className="text-4xl text-white/80 hover:text-white transition-colors duration-300" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              activeIndex === idx
                ? "bg-white"
                : "bg-white/30 hover:bg-white"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
