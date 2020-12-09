import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import netflix from "../img/1.png";
import multiform from "../img/3.png";
import musicapp from "../img/2.png";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  scrollReveal,
} from "../animation";
import { motion } from "framer-motion";
//styledComponent
import {
  Projects,
  Project,
  Hide,
  Frame1,
  Frame2,
  Frame3,
  Frame4,
} from "./styles";
//hooks
import { useScroll, UseScrollTop } from "../hooks";

export default ({ location: { pathname } }) => {
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <Projects
      style={{ background: "white" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4>
      <Project>
        <motion.h2 variants={fade}>Netflix Clone</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to={pathname + "/netflix"}>
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={netflix}
              alt="neflix-clone"
            />
          </Hide>
        </Link>
      </Project>
      <Project
        ref={element2}
        variants={scrollReveal}
        initial="hidden"
        animate={controls2}
      >
        <motion.h2>Multi-Step Register Form</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to={pathname + "/multi-form"}>
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={multiform}
              alt="multi-step-form"
            />
          </Hide>
        </Link>
      </Project>
      <Project
        ref={element3}
        variants={scrollReveal}
        initial="hidden"
        animate={controls3}
      >
        <motion.h2>Music App</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to={pathname + "/music-app"}>
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={musicapp}
              alt="music-app"
            />
          </Hide>
        </Link>
      </Project>
      <UseScrollTop />
    </Projects>
  );
};
