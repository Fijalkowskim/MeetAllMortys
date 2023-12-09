import React from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { MotionValue, motion } from "framer-motion";

interface Props {
  opacity: MotionValue<string>;
}

function SectionButton({ opacity }: Props) {
  const scrollToCards = () => {
    const cardsSection = document.getElementById("cards");
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.button
      onClick={scrollToCards}
      className="absolute bottom-2 text-6xl text-white cursor-pointer"
      animate={{ y: [-10, 0, -10] }}
      whileHover={{ color: "#9c9c9c" }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
        times: [0, 0.5, 1],
        ease: "backInOut",
      }}
      style={{
        opacity: opacity,
      }}
    >
      <FaAnglesDown />
    </motion.button>
  );
}

export default SectionButton;
