import React from "react";
import myPhoto from "../../img/me.jpg";
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
        <Button variants={fade}>CV</Button>
      </Description>
      <ImageContainer>
        <Image variants={photoAnimation} src={myPhoto} alt="myPhoto" />
      </ImageContainer>
      <Wave />
    </About>
  );
};
