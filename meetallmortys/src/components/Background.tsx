import React from "react";
import tilebackground from "../images/tile-background.jpg";

function Background() {
  return (
    <div className="absolute inset-0 z-[-1] bg-background overflow-hidden">
      <div className="absolute bg-gradient-to-r from-transparent via-gray-500 w-[500%] h-full right-[-200%] "></div>
    </div>
  );
}

export default Background;
