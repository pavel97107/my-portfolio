import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";

//styled
import { ContactStyle, Title, Hide, Circle, Social } from "./styles";
//hooks
export default () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "white" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch me</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send us a Message</h2>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send us a Message</h2>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send us a Message</h2>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send us a Message</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};
