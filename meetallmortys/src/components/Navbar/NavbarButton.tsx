import React from "react";
interface Props {
  text: String;
  route: String;
}
function NavbarButton({ text, route }: Props) {
  return (
    <a className="text-black text-2xl text-inherit cursor-pointer ">{text}</a>
  );
}

export default NavbarButton;
