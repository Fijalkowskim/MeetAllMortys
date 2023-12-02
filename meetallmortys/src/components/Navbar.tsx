import React from "react";
import MeetAllMortysLogo from "../images/Logo.png";

function Navbar() {
  return (
    <nav className="sticky top-0">
      <div className="absolute aspect-square bg-white rounded-full h-[16rem] translate-x-[-30%] translate-y-[-40%] shadow-md" />
      <img
        src={MeetAllMortysLogo}
        alt="Meet All Mortys Logo"
        className="absolute rounded-full max-w-none h-32"
      />
      <ul className="w-1/2 mx-auto bg-white shadow-md px-12 flex gap-24 p-2 items-center justify-center text-black rounded-bl-full rounded-br-full">
        <a className="text-white text-2xl text-inherit cursor-pointer">Home</a>
        <a className="text-white text-2xl text-inherit cursor-pointer">
          Characters
        </a>
        <a className="text-white text-2xl text-inherit cursor-pointer">
          Places
        </a>
        <a className="text-white text-2xl text-inherit cursor-pointer">About</a>
      </ul>
    </nav>
  );
}

export default Navbar;
