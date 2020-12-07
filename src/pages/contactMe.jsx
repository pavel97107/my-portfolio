import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

export default () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);
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
