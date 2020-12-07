import React from "react";
import { AboutSection, SkillsSection, FaqSection } from "../components";
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
        <AboutSection />
        <SkillsSection />
        <FaqSection />
      </motion.div>
  );
};
