import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function PageSwitchPanel() {
  return (
    <div className="mx-auto w-fit px-12 py-2 flex gap-24 items-center justify-center rounded-tl-full rounded-tr-full bg-white border-2 border-black border-b-0 text-2xl text-black/80">
      <FaAngleLeft />
      <FaAngleRight />
    </div>
  );
}

export default PageSwitchPanel;
