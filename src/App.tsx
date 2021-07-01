import React from "react";
import Global from "./styles/global";
import Home from "./pages/Home/Home";
import { StyleContainer } from "./styles/grid";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Product from "./pages/Product/Product";

function App() {
  return (
    <>
      <Global />
      <StyleContainer>
        <Header />
        {/* <Home /> */}
        <Product />
        <Footer />
      </StyleContainer>
    </>
  );
}

export default App;
