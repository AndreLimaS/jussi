import React from 'react';
import { Wrapper, Container, ImgProduct, NumberProduct, Title, Describe, Feature } from './Styles';
import { ProductPropsTypes } from './types';

const CardProduct = ({ img, number, name, describe, feature, button }: ProductPropsTypes) => {
  return (
    <Wrapper>
      <Container>
        <ImgProduct>
          <img src={img} alt={name} />
          <NumberProduct>{number}</NumberProduct>
        </ImgProduct>
        <Title>{name}</Title>
        <Describe>{describe}</Describe>
        {feature?.map((item: string, index: number) => (
          <Feature key={index}>• {item}</Feature>
        ))}
        {button}
      </Container>
    </Wrapper>
  );
};

export default CardProduct;
