import React from "react";

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
              <img src="/img/clock.svg" alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>I am able to solve problems of different difficulty levels.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src="img/diaphragm.svg" alt="diaphragm" />
              <h3>Hard Worker</h3>
            </div>
            <p>I love my job!</p>
          </Card>
          <Card>
            <div className="icon">
              <img src="/img/money.svg" alt="money" />
              <h3>Ambitious</h3>
            </div>
            <p>In the future I want to become a full stack developer.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src="/img/teamwork.svg" alt="teamwork" />
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
        <Image_ src="/img/home2.png" alt="skills picture" />
      </ImageContainer_>
    </Skills>
  );
};
