import React, { useEffect, useRef, useState } from "react";
import { useCardsContext } from "../../context/CardsContext";
import Card from "./Card";
import { CardData } from "../../model/CardData";
import { motion, useAnimate, useAnimation, useInView } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Cards() {
  const { randomCards, shiftCards } = useCardsContext();
  const [canShiftCards, setCanShiftCards] = useState(true);
  const [cardShiftTime, setCardShiftTime] = useState(0.5);
  const [isCardsLabelHovered, setIsCardsLabelHovered] = useState(false);
  const charactersSpanControlls = useAnimation();

  //Reveal animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const revealControlls = useAnimation();

  useEffect(() => {
    if (isInView) {
      revealControlls.start("visible");
    }
  }, [isInView]);

  const handleShiftCards = (next: boolean) => {
    if (!canShiftCards) return;
    shiftCards(next);
    setCanShiftCards(false);
    setTimeout(() => {
      setCanShiftCards(true);
    }, cardShiftTime * 1000);
  };

  useEffect(() => {
    if (isCardsLabelHovered) {
      charactersSpanControlls.start("hover");
    } else {
      charactersSpanControlls.start("normal");
    }
  }, [isCardsLabelHovered]);

  return (
    <motion.div
      className="flex flex-col items-center min-h-[100vh] pt-20"
      id="cards"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={revealControlls}
      transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
    >
      <motion.button
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        whileHover={{
          scale: 1.02,
          transition: { ease: "easeOut" },
        }}
        onHoverStart={() => setIsCardsLabelHovered(true)}
        onHoverEnd={() => setIsCardsLabelHovered(false)}
        onClick={() => {
          /*Implement tab switch*/
        }}
        transition={{ ease: "circOut", duration: 0.5 }}
        className="standard-border py-4 px-10  mb-6 rounded-full"
      >
        <h1 className="text-5xl">Your 5 random character cards</h1>
        <p className="text-center text-xl">
          Want to see more? Check{" "}
          <motion.span
            variants={{
              normal: { color: "initial" },
              hover: { color: "red" },
            }}
            initial="normal"
            animate={charactersSpanControlls}
            transition={{ duration: 10 }}
          >
            characters
          </motion.span>{" "}
          tab.
        </p>
      </motion.button>

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
          className="standard-border text-6xl px-4 rounded-full cursor-pointer text-center"
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
          className="standard-border text-6xl px-4 rounded-full cursor-pointer text-center"
          onClick={() => handleShiftCards(true)}
        >
          <FaAngleRight />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Cards;
