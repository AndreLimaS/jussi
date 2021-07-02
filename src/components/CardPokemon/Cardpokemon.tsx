import React from "react";
import Button from "../../components/Button/Button";
import colors from "../../styles/colors";
import { CardPokemonProps } from "./types";
import {
  Wrapper,
  Container,
  ContainerCard,
  ImgProduct,
  Title,
  Force,
} from "./Styles";
const CardPokemon = ({ image, name, hp }: CardPokemonProps) => {
  return (
    <Wrapper>
      <Container>
        <ContainerCard>
          <ImgProduct>
            <img src={image} alt={name} />
          </ImgProduct>
          <Title>{name}</Title>
          <Force>HP : {hp}</Force>
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
