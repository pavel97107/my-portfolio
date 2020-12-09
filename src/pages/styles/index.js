import styled from "styled-components";
import { motion } from "framer-motion";

export const Projects = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
  }

  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 375px) {
    padding: 1rem 1rem;
  }
`;
export const Project = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

//projectsDetail

export const Details = styled(motion.div)`
  color: white;
`;
export const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }

  @media (max-width: 320px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

export const Technology = styled.div`
  min-height: 80vh;
  flex-wrap: wrap;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 1350px) {
    flex-wrap: nowrap;
  }
`;

export const TechStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }

  .line {
    width: 100%;
    background-color: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }

  p {
    padding: 2rem 0rem;
  }

  @media (max-width: 375px) {
    padding: 0;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export const View = styled.a`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  z-index: 5;
`;

export const ButtonView = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Frame1 = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 10%;
  left: 0;
  z-index: 2;
  background-color: #fffebf;
`;

export const Frame2 = styled(Frame1)`
  background-color: #ff8efb;
`;

export const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;

export const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;

//Contact

export const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: white;
  min-height: 90vh;
  background: #1b1b1b;

  @media (max-width: 600px) {
    padding: 1rem 1rem;
    h2 {
      font-size: 2rem;
    }
  }
`;
export const Title = styled.div`
  margin-bottom: 4rem;
  color: #23d997;
`;

export const Circle = styled.div`
  position:relative;
  width: 4rem;
  height: 6rem;
  overflow: hidden;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

`;

export const Social = styled(motion.a)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;
