import React, { useEffect, useState } from "react";
import RickImage from "../../images/rick.png";
import MortyImage from "../../images/morty.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionButton from "../Sections/SectionButton";

function HeroSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const rickX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const mortyX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rickRot = useTransform(scrollYProgress, [0, 1], ["0deg", "-45deg"]);
  const mortyRot = useTransform(scrollYProgress, [0, 1], ["0deg", "45deg"]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.5], ["1", "0"]);
  const scrollScale = useTransform(scrollYProgress, [0, 1], ["1", "0.3"]);

  return (
    <div className="relative flex items-center w-full justify-center min-h-[100vh]">
      <motion.div
        className="standard-border text-5xl w-1/3 p-6 grid place-content-center text-center h-fit rounded-2xl tracking-tighter"
        style={{ opacity: scrollOpacity, scale: scrollScale }}
      >
        <p>
          <span className="font-bold">Rick and Morty</span> is a greatly written
          tv show with amazing characters, places and stories. Explore this
          world and
          <h1 className="font-rick text-7xl mt-6 text-primary-500">
            Meet All Mortys
          </h1>
        </p>
      </motion.div>
      <motion.img
        src={MortyImage}
        className={`absolute z-[-1] h-1/2 left-[57%] origin-center`}
        style={{
          x: mortyX,
          opacity: scrollOpacity,
          scale: scrollScale,
          rotateZ: mortyRot,
        }}
      />
      <motion.img
        src={RickImage}
        className="absolute z-[-1] h-1/2 right-[61%] origin-center"
        style={{
          x: rickX,
          opacity: scrollOpacity,
          scale: scrollScale,
          rotateZ: rickRot,
        }}
      />
      <SectionButton opacity={scrollOpacity} />
    </div>
  );
}

export default HeroSection;
