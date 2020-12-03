import React from "react";

//import globalStyle
import { GlobalStyle } from "./GlobalStyle";
//imports pages
import { AboutMe } from "./pages";
//import componnets
import {Nav} from './components'
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutMe />
    </div>
  );
}

export default App;
