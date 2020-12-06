import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

export default () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h1>Contact</h1>
    </motion.div>
  );
};
