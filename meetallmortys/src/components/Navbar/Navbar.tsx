import React from "react";
import MeetAllMortysLogo from "../../images/Logo.png";
import NavbarButton from "./NavbarButton";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 font-primary grid place-content-center w-[100vw]">
      <ul className="w-fit px-12 py-2 flex gap-24 items-center justify-center rounded-bl-full rounded-br-full standard-border border-t-0">
        <NavbarButton text={"Home"} route={"/"} />
        <NavbarButton text={"Characters"} route={"/characters"} />
        <NavbarButton text={"Places"} route={"/places"} />
        <NavbarButton text={"Epizodes"} route={"/epizodes"} />
        <NavbarButton text={"About"} route={"/about"} />
      </ul>
    </nav>
  );
}

export default Navbar;
