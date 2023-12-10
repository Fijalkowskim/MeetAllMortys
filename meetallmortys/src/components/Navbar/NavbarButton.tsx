import React from "react";
import { motion } from "framer-motion";
import { NavLink, NavLinkProps } from "react-router-dom";
interface Props {
  text: String;
  route: String;
}
function NavbarButton({ text, route }: Props) {
  return (
    <NavLink
      to={route as NavLinkProps["to"]}
      className={"active:text-action-500"}
    >
      <motion.a
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className={`group text-gray-800 text-2xl cursor-pointer hover:text-black leading-tight active:text-action-500`}
      >
        {text}
        <div className="h-[1px] w-full bg-gray-800 origin-center scale-0 group-hover:scale-100 transition-transform"></div>
      </motion.a>
    </NavLink>
  );
}

export default NavbarButton;
