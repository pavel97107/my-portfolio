import React from "react";

//import globalStyle
import { GlobalStyle } from "./GlobalStyle";
//imports pages
import { AboutMe } from "./pages";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutMe />
    </div>
  );
}

export default App;
