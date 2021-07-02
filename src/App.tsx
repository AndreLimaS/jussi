import React from "react";
import Global from "./styles/global";
import { StyleContainer } from "./styles/grid";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SearchProvider from "./Context/Search";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";
function App() {
  return (
    <BrowserRouter>
      <Global />
      <SearchProvider>
        <StyleContainer>
          <Header />
          <MainRoutes />
          <Footer />
        </StyleContainer>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
