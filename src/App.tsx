import React from "react";
import Global from "./styles/global";
import Home from "./pages/Home/Home";
import { StyleContainer } from "./styles/grid";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Product from "./pages/Product/Product";
import SearchProvider from "./Context/Search";

function App() {
  return (
    <>
      <Global />
      <SearchProvider>
        <StyleContainer>
          <Header />
          {/* <Home /> */}
          <Product />
          <Footer />
        </StyleContainer>
      </SearchProvider>
    </>
  );
}

export default App;
