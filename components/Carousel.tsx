"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import h1 from "@/public/Images/sesja.jpg";
import h3 from "@/public/Images/sesja2.jpg";
import h4 from "@/public/Images/wyjscie.jpg";
import { useState } from "react";
import Skeleton from "./ui/Skeleton";

const images = [
    { src: h1, position: "50% 50%" },
    { src: h3, position: "0% 50%" },
    { src: h4, position: "50% 100%" },
];

const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
        onClick={onClick}
        aria-label="Poprzedni slajd"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2"
    >
        <SlArrowLeft className="text-4xl text-white/80 hover:text-white duration-300 transition-colors" />
    </button>
);

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
        onClick={onClick}
        aria-label="Następny slajd"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2"
    >
        <SlArrowRight className="text-4xl text-white/80 hover:text-white duration-300 transition-colors" />
    </button>
);

const Carousel = () => {
    const [isFirstImageLoaded, setIsFirstImageLoaded] = useState(false);
    const settings = {
        dots: true,
        fade: true,
        arrows: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3800,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        appendDots: (dots: React.ReactNode) => (
            <div>
                <ul className="flex space-x-2 absolute bottom-12 left-1/2 -translate-x-1/2">
                    {dots}
                </ul>
            </div>
        ),
        customPaging: () => (
            <div className="w-3 h-3 bg-white/30 rounded-full transition-all duration-300 hover:bg-white"></div>
        ),
    };

    return (
        <div className="flex justify-center items-center relative">
            {!isFirstImageLoaded && <Skeleton />}
            <Slider
                {...settings}
                className="w-screen xl:max-w-[1600px] h-[75vh] min-h-[75vh] max-h-[75vh] xl:h-[86vh] xl:min-h-[86vh] xl:max-h-[86vh] slick-slider bg-stone-100"
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative w-screen xl:w-[1600px] h-[75vh] min-h-[75vh] max-h-[75vh] xl:h-[86vh] xl:min-h-[86vh] xl:max-h-[86vh] max-w-[1600px] text-center"
                    >
                        <Image
                            src={image.src}
                            alt={`Fotograf ${index + 1}`}
                            className="object-cover max-w-[1600px]"
                            style={{ objectPosition: image.position }}
                            fill
                            onLoad={() => {
                                if (index === 0) setIsFirstImageLoaded(true);
                            }}
                            quality={90}
                            {...(index === 0
                                ? { priority: true }
                                : { loading: "lazy" })}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
