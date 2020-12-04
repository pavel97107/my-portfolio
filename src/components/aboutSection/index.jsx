import React from "react";
import myPhoto from "../../img/me.jpg";
import { motion } from "framer-motion";

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

export default () => {
  const titleAnim = {
    hidden: { opacity: 0, transition: { duration: 2 } },
    show: { opacity: 1 },
  };

  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 1 },
    },
  };

  return (
    <About>
      <Description>
        <motion.div variants={container} initial="hidden" animate="show">
          <Hide>
            <motion.h2 variants={titleAnim}>Hi</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              My name is <CustomizeText>Pavel</CustomizeText>
            </motion.h2>
          </Hide>
          <motion.h2 variants={titleAnim}>
            <Text>I'am Frontend Developer.</Text>
          </motion.h2>
        </motion.div>
        <InfoText>
          Contact me if you need a promising developer with a desire to
          constantly develop.
        </InfoText>
        <Button>CV</Button>
      </Description>
      <ImageContainer>
        <Image src={myPhoto} alt="myPhoto" />
      </ImageContainer>
    </About>
  );
};
