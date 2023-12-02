import React from "react";
import MeetAllMortysLogo from "../images/Logo.png";

function Navbar() {
  return (
    <div className="w-full">
      <img
        src={MeetAllMortysLogo}
        alt="Meet All Mortys Logo"
        className="block m-auto"
      />
    </div>
  );
}

export default Navbar;
