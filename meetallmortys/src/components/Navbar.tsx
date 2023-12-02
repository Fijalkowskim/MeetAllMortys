import React from "react";
import MeetAllMortysLogo from "../images/Logo.png";

function Navbar() {
  return (
    <div className="w-full bg-black">
      <img
        src={MeetAllMortysLogo}
        alt="Meet All Mortys Logo"
        className="block m-auto h-20 "
      />
    </div>
  );
}

export default Navbar;
