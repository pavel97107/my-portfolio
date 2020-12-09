import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";

//socialIcons
import linkedin from "../img/linkedin.svg";
import instagram from "../img/instagram.svg";
import vk from "../img/vk.svg";
import github from "../img/github.svg";

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
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>My contacts</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social
            href="https://www.linkedin.com/in/pavel-serebryany-a911691b2/"
            variants={titleAnimation}
          >
            <Circle>
              <img src={linkedin} alt="linkedin" />
            </Circle>
            <h2>Linkedin</h2>
          </Social>
        </Hide>

        <Hide>
          <Social
            href="https://www.instagram.com/only959595/"
            variants={titleAnimation}
          >
            <Circle>
              <img src={instagram} alt="instagram" />
            </Circle>
            <h2>Instagram</h2>
          </Social>
        </Hide>

        <Hide>
          <Social
            href="https://vk.com/pavel.serebryany"
            variants={titleAnimation}
          >
            <Circle>
              <img src={vk} alt="vk" />
            </Circle>
            <h2>VK</h2>
          </Social>
        </Hide>

        <Hide>
          <Social
            href="https://github.com/pavel97107"
            variants={titleAnimation}
          >
            <Circle>
              <img src={github} alt="github" />
            </Circle>
            <h2>GitHub</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};
