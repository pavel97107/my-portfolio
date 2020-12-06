import styled from "styled-components";
import { motion } from "framer-motion";
export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
`;
export const CustomizeText = styled.span``;

export const Title = styled.div`
  overflow: hidden;
`;

export const Text = styled.h2`
  font-weight: lighter;
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const InfoText = styled(motion.p)``;

export const ImageContainer = styled.div`
  flex: 1;
  overflow: hidden;
`;
export const Image = styled(motion.img)`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;
export const Button = styled(motion.button)``;
