import React from "react";
import Content from "../../containers/Content/content";
import Header from "../../components/Header/header";
import Store from "../../containers/Store/store";
import { Wrapper } from "./styles";

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Content />
      <Store />
    </Wrapper>
  );
};

export default Home;
