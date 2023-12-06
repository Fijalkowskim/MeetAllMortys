import React, { useEffect, useState } from "react";
import { useCardsContext } from "../../context/CardsContext";
import Card from "./Card";
import { CardData } from "../../model/CardData";
import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Cards() {
  const { randomCards, shiftCards } = useCardsContext();
  const [canShiftCards, setCanShiftCards] = useState(true);
  const [cardShiftTime, setCardShiftTime] = useState(0.5);

  const handleShiftCards = (next: boolean) => {
    if (!canShiftCards) return;
    shiftCards(next);
    setCanShiftCards(false);
    setTimeout(() => {
      setCanShiftCards(true);
    }, cardShiftTime * 1000);
  };
  return (
    <div className="flex flex-col items-center ">
      <motion.h1 className="bg-neutral-200 text-5xl py-4 px-6 border-2 border-black mb-6 rounded-full">
        Your 5 random character cards
      </motion.h1>
      <motion.ul
        layout
        className="flex mx-auto w-fit font-futuristic justify-center mb-4"
      >
        {randomCards.map((card, i) => (
          <Card
            key={card.id}
            data={card}
            index={i - 2}
            transitionTime={cardShiftTime}
          />
        ))}
      </motion.ul>
      <div className="flex gap-20">
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
          className="text-6xl bg-neutral-200 px-4 rounded-full border-2 border-black shadow-md cursor-pointer text-center"
          onClick={() => handleShiftCards(false)}
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
          className="text-6xl bg-neutral-200 px-4 rounded-full border-2 border-black shadow-md cursor-pointer text-center"
          onClick={() => handleShiftCards(true)}
        >
          <FaAngleRight />
        </motion.button>
      </div>
    </div>
  );
}

export default Cards;
