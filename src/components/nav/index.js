import React from "react";
import { Nav, Line } from "./styles/nav";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default () => {
  const { pathname } = useLocation();
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
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width: pathname === "/" ? "50%" : "0%",
            }}
          />
        </li>
        <li className="link">
          <Link to="/projects">my projects</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width: pathname === "/projects" ? "50%" : "0%",
            }}
          />
        </li>
        <li className="link">
          <Link to="/contact">contact me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width: pathname === "/contact" ? "50%" : "0%",
            }}
          />
        </li>
      </ul>
    </Nav>
  );
};
