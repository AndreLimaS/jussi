import React from "react";
import Header from "../../components/Header/header";
import Content from "../../containers/Content/content";
import { Wrapper } from "./styles";

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Content />
    </Wrapper>
  );
};

export default Home;
