import React from "react";
import { CardData } from "../../model/CardData";
import CardInfo from "./CardInfo";
interface Props {
  data: CardData;
}
function Card({ data }: Props) {
  return (
    <div className="pb-4 bg-neutral-200 rounded-3xl flex flex-col items-center w-72 overflow-hidden shadow-slate-950 shadow-lg border-zinc-900 border-2">
      <img src={data.image} alt="" className="rounded-b-full shadow-md" />
      <p className="text-3xl text-center h-[72px] text-ellipsis overflow-hidden">
        {data.name}
      </p>
      <div className="w-full h-0.5 bg-black" />
      <CardInfo label="Species" data={data.species} />
      <CardInfo label="Location" data={data.location} />
    </div>
  );
}

export default Card;
