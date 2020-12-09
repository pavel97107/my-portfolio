import React from "react";
import { AboutSection, SkillsSection, FaqSection } from "../components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
//hooks
import { UseScrollTop } from "../hooks";
export default () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ overflow: "hidden" }}
    >
      <AboutSection />
      <SkillsSection />
      <FaqSection />
      <UseScrollTop />
    </motion.div>
  );
};
