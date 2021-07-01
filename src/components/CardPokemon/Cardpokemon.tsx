import React from "react";
import Button from "../../components/Button/Button";
import colors from "../../styles/colors";
import Pokemon from "../../assets/images/pokemon.png";
import {
  Wrapper,
  Container,
  ContainerCard,
  ImgProduct,
  Title,
  Force,
} from "./Styles";
const CardPokemon = () => {
  return (
    <Wrapper>
      <Container>
        <ContainerCard>
          <ImgProduct>
            <img src={Pokemon} alt="pokemon" />
          </ImgProduct>
          <Title>Vanusaur</Title>
          <Force>HP : 180</Force>
          <Button
            text={"Saiba Mais"}
            textColor={colors.black}
            borderColor={colors.green}
            borderRadius={6}
            background={colors.green}
          />
        </ContainerCard>
      </Container>
    </Wrapper>
  );
};

export default CardPokemon;
