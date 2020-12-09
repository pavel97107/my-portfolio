import React from "react";
import clock from "../../img/clock.svg";
import diaphragm from "../../img/diaphragm.svg";
import money from "../../img/money.svg";
import teamwork from "../../img/teamwork.svg";
import home2 from "../../img/home2.png";

//animation
import { scrollReveal } from "../../animation";

//styledComponents
import {
  ImageContainer_,
  Image_,
  Skills,
  Description_,
  Cards,
  Card,
} from "./styles/skillsSection";
import { useScroll } from "../../hooks";

export default () => {
  const [element, controls] = useScroll();

  return (
    <Skills variants={scrollReveal} animate={controls} ref={element}>
      <Description_>
        <h2>
          High <span>and</span> Soft Skills
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>I am able to solve problems of different difficulty levels.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Hard Worker</h3>
            </div>
            <p>I love my job!</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Ambitious</h3>
            </div>
            <p>In the future I want to become a full stack developer.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Team work</h3>
            </div>
            <p>
              I can find a common language with people, as well as work in a
              team.
            </p>
          </Card>
        </Cards>
      </Description_>
      <ImageContainer_>
        <Image_ src={home2} alt="skills picture" />
      </ImageContainer_>
    </Skills>
  );
};
