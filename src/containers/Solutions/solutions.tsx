import React from "react";
import CardProduct from "../../components/CardProduct/cardProduct";
import {
  Container,
  ContainerProduct,
  TitleSolutions,
  Title,
  LineTitle,
} from "./styles";

const Solutions = () => {
  return (
    <Container>
      <TitleSolutions>
        <LineTitle>{"//"}</LineTitle>
        <Title>Nossas soluções</Title>
      </TitleSolutions>
      <ContainerProduct>
        <CardProduct />
      </ContainerProduct>
    </Container>
  );
};

export default Solutions;
