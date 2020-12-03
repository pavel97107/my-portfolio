import React from "react";

//import globalStyle
import { GlobalStyle } from "./GlobalStyle";
//imports pages
import { AboutMe, ContactMe, MyProjects } from "./pages";
//import componnets
import { Nav } from "./components";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact component={AboutMe} />
        <Route path="/projects" component={MyProjects} />
        <Route path="/contact" component={ContactMe} />
      </Switch>
    </div>
  );
}

export default App;
