import React from "react";
import { CardData } from "../../model/CardData";
interface Props {
  data: CardData;
}
function Card({ data }: Props) {
  return (
    <div className="bg-white  py-2 px-2 rounded-md flex flex-col items-center w-60">
      <img src={data.image} alt="" className="rounded-lg" />
      <p className="text-3xl text-center pb-16">{data.name}</p>
      <p className="text-xl text-gray-600 text-center mt-auto">
        Species: {data.species}
      </p>
    </div>
  );
}

export default Card;
