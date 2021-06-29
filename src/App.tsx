import React from "react";
import Global from "./styles/global";
import Home from "./pages/Home/Home";
import { StyleContainer } from "./styles/grid";

function App() {
  return (
    <>
      <Global />
      <StyleContainer>
        <Home />
      </StyleContainer>
    </>
  );
}

export default App;
