import React, { useEffect } from "react";
import { useCardsContext } from "../../context/CardsContext";

function Cards() {
  const { getRandomCards } = useCardsContext();

  const getCards = () => {
    getRandomCards(5)
      .then((cards) => {
        console.log(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCards();
  }, []);
  return <div>Cards</div>;
}

export default Cards;
