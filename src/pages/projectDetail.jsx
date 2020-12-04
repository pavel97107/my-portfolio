import React, { useState, useEffect } from "react";
import { projectsList } from "../projectsData";

import {
  Details,
  HeadLine,
  Technology,
  TechStyle,
  ImageContainer,
} from "./styles";

export default ({ location }) => {
  const [projects, setProjects] = useState(projectsList);
  const [project, setProject] = useState(null);

  const url = location.pathname;

  useEffect(() => {
    const currentProject = projects.find((_) => _.url === url);
    setProject(currentProject);
  }, [projects, url]);

  console.log(url);

  return (
    <>
      {project && (
        <Details>
          <HeadLine>
            <h2>{project.title}</h2>
            <img src={project.mainImg} alt={project.title} />
          </HeadLine>
          <Technology>
            {project.technology.map((_) => (
              <Tech {..._} key={_.title} />
            ))}
          </Technology>
          <ImageContainer>
            <img src={project.secondaryImg} alt={project.title} />
          </ImageContainer>
        </Details>
      )}
    </>
  );
};

const Tech = ({ title, description }) => (
  <TechStyle>
    <h3>{title}</h3>
    <div className="line"></div>
    <p>{description}</p>
  </TechStyle>
);
