import React, { useEffect, useState } from "react";
import { useCardsContext } from "../../context/CardsContext";
import Card from "./Card";
import { CardData } from "../../model/CardData";
import { motion } from "framer-motion";

function Cards() {
  const { randomCards } = useCardsContext();
  return (
    <motion.ul
      layout
      className="flex mx-auto w-fit font-futuristic justify-center"
    >
      {randomCards.map((card, i) => (
        <Card key={card.id} data={card} index={i - 2} />
      ))}
    </motion.ul>
  );
}

export default Cards;
