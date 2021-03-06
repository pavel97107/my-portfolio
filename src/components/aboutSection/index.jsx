import React, { useEffect } from "react";
import { motion } from "framer-motion";
//Animation
import { titleAnimation, fade, photoAnimation } from "../../animation";
//StyledComponents
import {
  About,
  CustomizeText,
  Hide,
  Image,
  ImageContainer,
  InfoText,
  Text,
  Description,
  Title,
  Button,
} from "./styles/aboutSection";

import { Wave } from "../";

export default () => {
  useEffect(() => {
    document.title = "Pavel Serebryany";
  }, []);

  return (
    <About>
      <Description>
        <Title>
          <Hide>
            <motion.h2 variants={titleAnimation}>Hi</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              My name is <CustomizeText>Pavel</CustomizeText>
            </motion.h2>
          </Hide>
          <motion.h2 variants={titleAnimation}>
            <Text>I'am Frontend Developer.</Text>
          </motion.h2>
        </Title>
        <InfoText variants={fade}>
          Contact me if you need a promising developer with a desire to
          constantly develop.
        </InfoText>
        <Button
          target="_blank"
          href="https://drive.google.com/file/d/15VSlSLqSixaG4BdndXcT-VIAQuLraAbY/view?usp=sharing"
          variants={fade}
        >
          CV
        </Button>
      </Description>
      <ImageContainer>
        <Image variants={photoAnimation} src='/img/me.jpg' alt="myPhoto" />
      </ImageContainer>
      <Wave />
    </About>
  );
};
