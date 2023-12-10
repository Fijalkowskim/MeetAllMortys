import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink, NavLinkProps, useLocation } from "react-router-dom";
interface Props {
  text: String;
  route: String;
}
function NavbarButton({ text, route }: Props) {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    checkIfActive();
  }, []);
  const checkIfActive = () => {
    setIsActive(location.pathname === route);
  };
  return (
    <motion.div
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.05 }}
      className="group cursor-pointer"
      onClick={checkIfActive}
    >
      <NavLink to={route as NavLinkProps["to"]}>
        <motion.p
          className={`group  text-2xl ${
            isActive ? "text-action-500" : "text-gray-800 hover:text-black"
          }  leading-tigh`}
        >
          {text}
          <div
            className={`h-[1px] w-full  ${
              isActive
                ? "bg-action-500 scale-100"
                : " bg-gray-800 group-hover:scale-100"
            }   origin-center scale-0  transition-transform`}
          ></div>
        </motion.p>
      </NavLink>
    </motion.div>
  );
}

export default NavbarButton;
