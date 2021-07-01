import React from "react";
import CardPokemon from "../../components/CardPokemon/Cardpokemon";
import { Container, TitleProducts, LineTitle, Title } from "./styles";

const Product = () => {
  return (
    <Container>
      <TitleProducts>
        <LineTitle>{"//"}</LineTitle>
        <Title>Nossos Produtos</Title>
      </TitleProducts>
      <CardPokemon />
    </Container>
  );
};

export default Product;
