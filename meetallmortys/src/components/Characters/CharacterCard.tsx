import React from "react";
import { CharacterData } from "../../model/CharacterData";
import { motion } from "framer-motion";

interface Props {
  data: CharacterData;
}
function CharacterCard({ data }: Props) {
  return (
    <motion.div
      animate="animate"
      whileHover="whileHover"
      className=" cursor-pointer flex flex-col items-center font-futuristic relative mb-28"
    >
      <motion.img
        src={data.image}
        alt={data.name}
        variants={{
          animate: {
            scale: 1,
            borderRadius: 200,
          },
          whileHover: {
            scale: 1.05,
            borderRadius: 100,
          },
        }}
        transition={{ type: "spring" }}
        className="aspect-square h-70 object-cover object-center content-center border-4 border-white z-10"
      />
      <motion.h1
        className={`bg-white text-black px-4 rounded-xl text-center pt-20 pb-1 my-4 ${
          data.name.length >= 16 ? "text-2xl" : "text-4xl"
        }`}
        variants={{
          animate: {
            opacity: 0,
          },
          whileHover: {
            opacity: 1,
            y: 80,
          },
        }}
        style={{
          position: "absolute",
          top: "50%",
        }}
        transition={{ type: "spring", damping: 14 }}
      >
        {data.name}
      </motion.h1>
    </motion.div>
  );
}

export default CharacterCard;
