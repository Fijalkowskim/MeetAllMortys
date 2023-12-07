import React, { useEffect, useState } from "react";
import RickImage from "../../images/rick.png";
import MortyImage from "../../images/morty.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function HeroSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const rickX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const mortyX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.5], ["1", "0"]);
  const scrollScale = useTransform(scrollYProgress, [0, 1], ["1", "0.3"]);

  return (
    <div className="flex items-center w-full justify-center min-h-[100vh]">
      <motion.div className="relative standard-border text-5xl w-1/3 p-6 grid place-content-center text-center h-fit rounded-2xl tracking-tighter">
        <p>
          <span className="font-bold">Rick and Morty</span> is a greatly written
          tv show with amazing characters, places and stories. Explore this
          world and
          <h1 className="font-rick text-7xl mt-6 text-primary-500">
            Meet All Mortys
          </h1>
        </p>
        <motion.img
          src={MortyImage}
          className={`absolute rotate-12 scale-90 z-[-1] bottom-[-30%] right-[-60%] origin-center`}
          style={{ x: mortyX, opacity: scrollOpacity, scale: scrollScale }}
        />
        <motion.img
          src={RickImage}
          className="absolute -rotate-12 scale-90 z-[-1] bottom-[-30%] left-[-45%] origin-center"
          style={{ x: rickX, opacity: scrollOpacity, scale: scrollScale }}
        />
      </motion.div>
    </div>
  );
}

export default HeroSection;
