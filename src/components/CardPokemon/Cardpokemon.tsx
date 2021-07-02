import React from 'react';
import Button from '../../components/Button/Button';
import colors from '../../styles/colors';
import { CardPokemonProps } from './types';
import { Wrapper, ContainerDeitals, ContainerCard, ImgProduct, Title, Force } from './Styles';
const CardPokemon = ({ image, name, hp }: CardPokemonProps) => {
  return (
    <Wrapper>
      <ContainerCard>
        <ImgProduct>
          <img src={image} alt={name} />
        </ImgProduct>
        <ContainerDeitals>
          <Title>{name}</Title>
          <Force>HP : {hp}</Force>
          <Button
            text={'Saiba Mais'}
            textColor={colors.black}
            borderColor={colors.green}
            borderRadius={6}
            background={colors.green}
          />
        </ContainerDeitals>
      </ContainerCard>
    </Wrapper>
  );
};

export default CardPokemon;
