import React, { useEffect, useState } from "react";
import { useCardsContext } from "../../context/CardsContext";
import Card from "./Card";
import { CardData } from "../../model/CardData";

function Cards() {
  const { randomCards } = useCardsContext();
  return (
    <ul className="flex mx-auto w-fit gap-4 font-futuristic">
      {randomCards.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </ul>
  );
}

export default Cards;
