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
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>Hi</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              My name is <CustomizeText>Pavel</CustomizeText>
            </motion.h2>
          </Hide>
          <motion.h2>
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
