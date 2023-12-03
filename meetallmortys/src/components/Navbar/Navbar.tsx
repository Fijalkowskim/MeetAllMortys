import React from "react";
import MeetAllMortysLogo from "../../images/Logo.png";
import NavbarButton from "./NavbarButton";

function Navbar() {
  return (
    <nav className="sticky top-0 mb-8">
      {/* <div className="absolute aspect-square bg-white rounded-full h-[16rem] translate-x-[-30%] translate-y-[-40%] shadow-md" />
      <img
        src={MeetAllMortysLogo}
        alt="Meet All Mortys Logo"
        className="absolute rounded-full max-w-none h-32"
      /> */}
      <ul className="w-fit mx-auto bg-white shadow-lg px-12 py-2 flex gap-24 items-center justify-center rounded-bl-full rounded-br-full">
        <NavbarButton text={"Home"} route={"/"} />
        <NavbarButton text={"Characters"} route={"/"} />
        <NavbarButton text={"Places"} route={"/"} />
        <NavbarButton text={"Epizodes"} route={"/"} />
        <NavbarButton text={"About"} route={"/"} />
      </ul>
    </nav>
  );
}

export default Navbar;
