import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
interface Props {
  numberOfPages: number | undefined;
  currentPage: number;
}
function PageSwitchPanel({ numberOfPages, currentPage }: Props) {
  return (
    <div className="mx-auto w-fit px-12 py-2 flex gap-24 items-center justify-center rounded-tl-full rounded-tr-full bg-white border-2 border-black border-b-0 text-2xl text-black/80">
      <motion.button
        animate={{ scale: 1, x: 0 }}
        whileHover={{
          scale: 1.05,
          x: -10,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            mass: 0.1,
          },
        }}
        whileTap={{
          scale: 0.9,
        }}
        className="text-4xl text-center"
        onClick={() => {}}
      >
        <FaAngleLeft />
      </motion.button>

      <motion.button
        animate={{ scale: 1, x: 0 }}
        whileHover={{
          scale: 1.05,
          x: 10,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            mass: 0.1,
          },
        }}
        whileTap={{
          scale: 0.9,
        }}
        className="text-4xl text-center"
        onClick={() => {}}
      >
        <FaAngleRight />
      </motion.button>
    </div>
  );
}

export default PageSwitchPanel;
