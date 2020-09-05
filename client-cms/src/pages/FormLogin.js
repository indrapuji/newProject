import React from "react";
import { motion } from "framer-motion";
import { IoIosLogOut } from "react-icons/io";
import Navigation from "../components/Navigation";

export default () => {
  const pageTransition = {
    init: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  const onActive = "/login";
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <Navigation activePath={onActive} />
      <h1>Login</h1>
      <IoIosLogOut />
    </motion.div>
  );
};
