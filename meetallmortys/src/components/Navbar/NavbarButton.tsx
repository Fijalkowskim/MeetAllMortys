import React from "react";
import { motion } from "framer-motion";
interface Props {
  text: String;
  route: String;
}
function NavbarButton({ text, route }: Props) {
  return (
    <motion.a
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`group text-gray-800 text-2xl cursor-pointer hover:text-black leading-tight active:text-red-800`}
    >
      {text}
      <div className="h-[1px] w-full bg-gray-800 origin-center scale-0 group-hover:scale-100 transition-transform"></div>
    </motion.a>
  );
}

export default NavbarButton;
