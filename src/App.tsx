import React from "react";
import Global from "./styles/global";
import Home from "./pages/Home/Home";
import { StyleContainer } from "./styles/grid";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

function App() {
  return (
    <>
      <Global />
      <StyleContainer>
        <Header />
        <Home />
        <Footer />
      </StyleContainer>
    </>
  );
}

export default App;
