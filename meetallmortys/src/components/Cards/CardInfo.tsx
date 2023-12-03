import React from "react";
interface Props {
  label: string;
  data: string;
}
function CardInfo({ label, data }: Props) {
  return (
    <div className="text-md text-gray-600 flex w-full px-4 items-end">
      <div>{label}: </div>
      <div className="ml-auto text-xl text-right text-black">{data}</div>
    </div>
  );
}

export default CardInfo;
