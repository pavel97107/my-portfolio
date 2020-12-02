import React from "react";
import myPhoto from "../../img/me.jpg";

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
        <Title>
          <Hide>
            <Text>Hi</Text>
          </Hide>
          <Hide>
            <Text>
              My name is <CustomizeText>Pavel</CustomizeText>
            </Text>
          </Hide>
          <Hide>
            <Text>I'am Frontend Developer</Text>
          </Hide>
          <InfoText>
            Contact me if you need a promising developer with a desire to
            constantly develop.
          </InfoText>
          <Button>CV</Button>
        </Title>
      </Description>
      <ImageContainer>
        <Image src={myPhoto} alt="myPhoto" />
      </ImageContainer>
    </About>
  );
};
