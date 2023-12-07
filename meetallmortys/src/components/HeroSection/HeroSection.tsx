import React from "react";
import RickImage from "../../images/rick.png";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className="flex items-center w-full justify-center h-[100vh]">
      <motion.div className="relative standard-border text-5xl w-1/3 p-6 grid place-content-center text-center h-fit rounded-2xl tracking-tighter">
        <p>
          <span className="font-bold">Rick and Morty</span> is a greatly written
          tv show with amazing characters, places and stories. Explore this
          world and
          <h1 className="font-rick text-7xl mt-6">Meet All Mortys</h1>
        </p>
        <motion.img
          src={RickImage}
          className="absolute rotate-12 scale-90 z-[-1] bottom-0 right-[-30%] origin-center"
        />
      </motion.div>
    </div>
  );
}

export default HeroSection;
