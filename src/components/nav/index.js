import React from "react";
import { Nav } from "./styles/nav";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Nav>
      <h1>
        <Link id="logo" to="/">
          Pavel
        </Link>
      </h1>
      <ul className="nav-links">
        <li className="link">
          <Link to="/">about me</Link>
        </li>
        <li className="link">
          <Link to="/projects">my projects</Link>
        </li>
        <li className="link">
          <Link to="/contact">contact me</Link>
        </li>
      </ul>
    </Nav>
  );
};
