"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import h1 from "@/public/Images/sesja.jpg";
import h3 from "@/public/Images/sesja2.jpg";
import h4 from "@/public/Images/wyjscie.jpg";

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
    const settings = {
        dots: true,
        fade: true,
        arrows: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3600,
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
            <Slider {...settings} className="w-full max-w-[1700px] slick-slider">
                {images.map((image, index) => (
                    <div key={index} className="relative w-full xl:w-[1700px] h-[75vh] xl:h-[86vh] max-w-[1700px] text-center">
                        <Image
                            src={image.src}
                            alt={`Obraz ${index + 1}`}
                            className="object-cover w-full h-full"
                            style={{ objectPosition: image.position }}
                            fill
                            priority
                            quality={100}
                            placeholder="blur"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
