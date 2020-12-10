import styled from "styled-components";
import { motion } from "framer-motion";
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;

  @media (max-width: 1300px) {
    padding: 0;

    a {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const CustomizeText = styled.span``;

export const Title = styled.div`
  overflow: hidden;
`;

export const Text = styled(motion.h2)`
  font-weight: lighter;
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const InfoText = styled(motion.p)``;

export const ImageContainer = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
`;
export const Image = styled(motion.img)`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;
export const Button = styled(motion.a)`
  display: inline-flex;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #23d997;
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  &:hover {
    background: #23d997;
    color: white;
  }
`;
