import React from "react";
import { CardData } from "../../model/CardData";
import CardInfo from "./CardInfo";
import { motion } from "framer-motion";
import { transform } from "typescript";
interface Props {
  data: CardData;
  index: number;
}
function Card({ data, index }: Props) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      layout
      className={`pb-4 bg-neutral-200 rounded-3xl flex flex-col items-center w-72
      overflow-hidden shadow-slate-950 shadow-md border-zinc-900 border-2`}
    >
      <img src={data.image} alt="" className="rounded-b-full shadow-md" />
      <p className="text-3xl text-center h-[72px] text-ellipsis overflow-hidden">
        {data.name}
      </p>
      <div className="w-full h-0.5 bg-black" />
      <CardInfo label="Species" data={data.species} />
      <CardInfo label="Location" data={data.location} />
    </motion.div>
  );
}

export default Card;
