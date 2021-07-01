import React, { useState, useEffect, useCallback } from "react";
import CardPokemon from "../../components/CardPokemon/Cardpokemon";
import { Wrapper, Container, TitleProducts, LineTitle, Title } from "./styles";
import { getCardsPokemons } from "../../services/api/pokemons/pokemons";

const Product = () => {
  type CardsProps = {
    data: [
      {
        name: string;
        hp: number;
        images: {
          small: string;
        };
      }
    ];
  };
  const [cards, setCards] = useState<CardsProps>();

  useEffect(() => {
    getCards();
  }, []);

  const getCards = useCallback(() => {
    getCardsPokemons()
      .then((response: any) => {
        setCards(response);
      })
      .catch((error) => {
        console.log("Erro: ", error);
      });
  }, []);

  return (
    <Wrapper>
      <TitleProducts>
        <LineTitle>{"//"}</LineTitle>
        <Title>Nossos Produtos</Title>
      </TitleProducts>
      <Container>
        {cards &&
          cards.data?.map((item, index) => (
            <CardPokemon
              key={index}
              image={item.images.small}
              name={item.name}
              hp={item.hp}
            />
          ))}
      </Container>
    </Wrapper>
  );
};

export default Product;
