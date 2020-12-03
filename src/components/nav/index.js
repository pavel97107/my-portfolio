import React from "react";
import {Nav} from './styles/nav'


export default () => {
  return (
    <Nav>
      <h1>
        <a id="logo" href="!#">
          Pavel
        </a>
      </h1>
      <ul className="nav-links">
        <li className="link">
          <a href="!#">about me</a>
        </li>
        <li className="link">
          <a href="!#">my projects</a>
        </li>
        <li className="link">
          <a href="!#">contact me</a>
        </li>
      </ul>
    </Nav>
  );
};
