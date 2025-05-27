"use client";

import { useEffect, useRef } from "react";
import Lightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiPlay } from "react-icons/pi";
import ShareBtn from "@/app/strefa-klienta/[slug]/buttons/ShareBtn";
import DownloadAllBtn from "./buttons/DownloadAllBtn";
import { GoDownload } from "react-icons/go";

export default function Galeria({
    name,
    heroTitle,
    heroImage,
    images,
}: {
    name: string;
    heroTitle: string;
    heroImage: string;
    images: { publicId: string; url: string; height: number; width: number }[];
}) {
    const galleryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let lightbox: Lightbox | null = null;

        if (galleryRef.current) {
            lightbox = new Lightbox({
                gallery: galleryRef.current,
                children: "a",
                pswpModule: () => import("photoswipe"),
            });
            lightbox.init();
        }

        return () => {
            lightbox?.destroy();
        };
    }, [images]);

    return (
        <div>
            <div className="h-screen w-full relative overflow-hidden anim-opacity">
                <Image
                    src={heroImage}
                    alt="..."
                    height={600}
                    width={1024}
                    className="object-cover h-full w-full"
                />
                <motion.div className="absolute inset-0 h-full w-full bg-black/80" />
                <motion.div
                    className="absolute inset-0 z-10 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                >
                    <motion.div
                        className="absolute top-3/4 left-0 w-[200%] h-[200%] -translate-x-1/2 blur-3xl opacity-30 mix-blend-screen bg-gradient-to-r from-white via-gray-500 to-gray-700 animate-aurora"
                        animate={{
                            x: [0, -100, 100, 0],
                            y: [0, 50, -50, 0],
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>

                <motion.div
                    className="absolute left-0 top-24 h-px w-10/12 border-white/60 border"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                />

                <motion.div
                    className="absolute right-0 bottom-24 h-px lg:w-[80vw] w-[40%] sm:w-[55%] md:w-[65%] border-white/60 border"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                />

                <motion.div
                    className="absolute left-[10%] sm:left-[10%] lg:-right-20 bottom-[105px] text-sm h-px w-full text-white uppercase tracking-widest"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <p>Jarek Olszewski</p>
                </motion.div>

                <div className="flex flex-col items-center justify-center z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.h1
                        className="text-xl font-medium leading-tight uppercase text-center text-white/80"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        {heroTitle}
                    </motion.h1>

                    <motion.p
                        className="text-4xl lg:text-5xl font-medium w-max leading-tight uppercase text-center mb-8 text-white/80"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        {name}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        <Link
                            href="#galeria"
                            className="p-2 px-6 text-white/80 font-medium border uppercase border-white/70 hover:text-black hover:bg-white/80 transition-colors duration-300"
                        >
                            Zobacz Galerie
                        </Link>
                    </motion.div>
                </div>
            </div>

            <div className="bg-white px-6 pt-2 flex items-center justify-between">
                <div>
                    <p className="uppercase text-gray-800 font-semibold tracking-wides">
                        {heroTitle}
                    </p>
                    <p className="uppercase text-sm text-gray-500 font-light -mt-1 tracking-wides">
                        {name}
                    </p>
                </div>
                <div className="space-x-5 flex items-center justify-center text-gray-600 text-2xl py-3">
                    <PiPlay />
                    <IoIosHeartEmpty />
                    <DownloadAllBtn images={images} asZip={true} />
                    <ShareBtn name={name} heroTitle={heroTitle} />
                </div>
            </div>

            <div
                id="galeria"
                ref={galleryRef}
                className="columns-1 sm:columns-2 md:columns-3 gap-2 space-y-2 p-2"
            >
                {images.map(({ publicId, url, height, width }) => (
                    <a
                        key={publicId}
                        href={url}
                        data-pswp-width={width}
                        data-pswp-height={height}
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full group"
                    >
                        <div className="relative w-full overflow-hidden">
                            {/* <div className="bg-gradient-to-t from-black via-transparent to-transparent z-10 absolute inset-0 h-full w-full -translate-y-full group-hover:translate-y-0 flex items-end justify-end p-4 text-white text-2xl space-x-2">
                                <IoIosHeartEmpty />

                                <a
                                    href={url}
                                    download
                                >
                                    <GoDownload />
                                </a>
                            </div>
                            <CldImage
                                src={publicId}
                                alt="Zdjęcie klienta"
                                width={width}
                                height={height}
                                className="w-full h-auto object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            /> */}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
