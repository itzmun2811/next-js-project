"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
   



export default function Hero(){
 const images = [
    "/branded-perfume-500x500.webp",
    "/images.jpeg",
    "/public/floral-perfume-bottle-orchid-flowers-floral-perfume-bottle-orchid-flowers-116126068 (1).webp",
  ];


    return(

<div className=" w-11/12 mx-auto flex flex-col bg-gray-100 lg:flex-row-reverse items-center justify-center min-h-screen  gap-10 px-6 lg:px-10">
      
      {/* Perfume Image with Floating Animation */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="relative"
      >
        <Image
          src="/branded-perfume-500x500.webp"
          alt="Perfume"
          width={450}
          height={650}
          className="drop-shadow-xl rounded-lg"
        />
        {/* Glowing Effect Under Bottle */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-6 bg-purple-400 rounded-full blur-2xl opacity-60"></div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center lg:text-left max-w-lg"
      >
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl lg:text-5xl font-bold text-black "
        >
          Discover Timeless Luxury
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-lg text-gray-600"
        >
          Elevate your presence with premium perfumes designed for elegance,
          style, and unforgettable memories.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full shadow-lg"
        >
          Shop Now
        </motion.button>
      </motion.div>
    </div>
















    )}
{/* <div className="card w-11/12 mx-auto bg-base-200 shadow-sm
 flex flex-col  lg:flex-row-reverse items-center
">
  <figure className="flex-1 flex justify-center">
    <Image width={500} height={700}
      src="/branded-perfume-500x500.webp"
      alt="Album" />
  </figure>
  <div className="card-body flex-1 flex flex-col ">
    <h2 className="card-title text-3xl">Unveil Your Signature Scent</h2>
    <p className="text-lg">
        Step into the world of luxury with perfumes designed to define elegance, 
    style, and unforgettable charm — crafted for every occasion.
    </p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div> */}

    
