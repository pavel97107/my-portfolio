import React from "react";

//import globalStyle
import { GlobalStyle } from "./GlobalStyle";
//imports pages
import { AboutMe, ContactMe, MyProjects, ProjectDetail } from "./pages";
//import componnets
import { Nav } from "./components";

import { Route, Switch, useLocation } from "react-router-dom";

//Animate
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={AboutMe} />
          <Route path="/projects" exact component={MyProjects} />
          <Route path="/projects/:id" component={ProjectDetail} />
          <Route path="/contact" component={ContactMe} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
