import React from "react";
import { CharacterData } from "../../model/CharacterData";
import { motion } from "framer-motion";

interface Props {
  data: CharacterData;
}
function CharacterCard({ data }: Props) {
  return (
    <motion.div
      initial="initial"
      whileHover="whileHover"
      className=" cursor-pointer flex flex-col items-center font-futuristic"
    >
      <motion.img
        src={data.image}
        alt={data.name}
        variants={{
          initial: {
            scale: 1,
          },
          whileHover: {
            scale: 1.05,
          },
        }}
        transition={{ type: "spring" }}
        className="aspect-square h-60 object-cover object-center content-center rounded-full border-4 border-white"
      />
      <motion.h1
        className={`bg-white text-black px-4 rounded-xl text-center py-1 my-4 ${
          data.name.length >= 16 ? "text-2xl" : "text-4xl"
        }`}
        variants={{
          initial: {
            scale: 1,
          },
          whileHover: {
            scale: 1.05,
          },
        }}
        transition={{ type: "spring" }}
      >
        {data.name}
      </motion.h1>
    </motion.div>
  );
}

export default CharacterCard;
