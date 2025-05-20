import { FaStar } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import { OPINIONS } from "@/constants/Links";

export default function Opinions() {
  return (
    <Carousel className="w-full px-2 py-8">
      <CarouselContent className="flex gap-2">
        {OPINIONS.map((opinia, i) => {
          const fullStars = Math.floor(opinia.rating);

          return (
            <CarouselItem
              key={i}
              className="basis-[80%] sm:basis-1/2 lg:basis-1/3"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 border border-neutral-200">
                <p className="text-neutral-700 mb-4 text-base leading-relaxed italic">
                  “{opinia.text}”
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar
                        key={idx}
                        className={`w-5 h-5 ${
                          idx < fullStars
                            ? "text-yellow-400"
                            : idx < opinia.rating
                            ? "text-yellow-400 opacity-60"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-neutral-600 font-medium">
                    {opinia.rating.toFixed(1)} / 5
                  </span>
                </div>
                <span className="text-sm font-semibold text-neutral-800 mt-auto">
                  – {opinia.name}
                </span>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
