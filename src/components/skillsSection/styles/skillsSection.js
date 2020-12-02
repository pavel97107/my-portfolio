import styled from "styled-components";
import {
  ImageContainer,
  Image,
  About,
  Description,
} from "../../aboutSection/styles/aboutSection";

export const ImageContainer_ = styled(ImageContainer)``;
export const Image_ = styled(Image)``;
export const Skills = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
export const Description_ = styled(Description)``;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  flex-basis: 20rem;

  .icon {
      display: flex;
      align-items: center;
      h3 {
          margin-left: 1rem;
          background: white;
          color: black;
          padding: 1rem;
      }
  }
`;
