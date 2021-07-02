import React, { useState, useEffect, useCallback, useContext } from "react";
import CardPokemon from "../../components/CardPokemon/Cardpokemon";
import { Wrapper, Container, TitleProducts, LineTitle, Title } from "./styles";
import {
  getCardsPokemons,
  getCardsPokemonName,
} from "../../services/api/pokemons/pokemons";
import { SearchContext } from "../../Context/Search";
import Animation from "../../components/Animation/animation";
const Product = () => {
  const [cards, setCards] = useState<CardsProps>();
  const { namePokemon } = useContext(SearchContext);
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

  const getCards = useCallback(() => {
    getCardsPokemons()
      .then((response: any) => {
        setCards(response);
      })
      .catch((error) => {
        console.log("Erro: ", error);
      });
  }, []);

  const getCardsName = useCallback(() => {
    getCardsPokemonName(namePokemon)
      .then((response: any) => {
        setCards(response);
      })
      .catch((error) => {
        console.log("Erro: ", error);
      });
  }, [namePokemon]);

  useEffect(() => {
    if (namePokemon) {
      getCardsName();
    } else {
      getCards();
    }
  }, [getCards, getCardsName, namePokemon]);

  return (
    <Wrapper>
      <TitleProducts>
        <LineTitle>{"//"}</LineTitle>
        <Title>Nossos Produtos</Title>
      </TitleProducts>
      <Container>
        {!!cards?.data.length === false && (
          <Animation isPaused={!!cards?.data.length} />
        )}
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
