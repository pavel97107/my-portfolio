import React from "react";
import { Link } from "react-router-dom";
import netflix from "../img/netflix.png";
import multiform from "../img/multi.png";
import musicapp from "../img/waves.png";
import { pageAnimation } from "../animation";
//styledComponent
import { Projects, Project } from "./styles";

export default ({ location: { pathname } }) => {
  return (
    <Projects
      style={{ background: "white" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Project>
        <h2>Netflix Clone</h2>
        <div className="line"></div>
        <Link to={pathname + "/netflix"}>
          <img src={netflix} alt="neflix-clone" />
        </Link>
      </Project>
      <Project>
        <h2>Multi-Step Register Form</h2>
        <div className="line"></div>
        <Link to={pathname + "/multi-form"}>
          <img src={multiform} alt="multi-step-form" />
        </Link>
      </Project>
      <Project>
        <h2>Music App</h2>
        <div className="line"></div>
        <Link to={pathname + "/music-app"}>
          <img src={musicapp} alt="music-app" />
        </Link>
      </Project>
    </Projects>
  );
};
