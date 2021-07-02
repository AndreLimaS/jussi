import React from 'react';
import { Container } from './Styles';
import { CardBuyProps } from './types';

const CardBuy = ({ image, text, button, ...props }: CardBuyProps) => {
  return (
    <Container {...props}>
      <img src={image} alt={text} />
      {button}
    </Container>
  );
};

export default CardBuy;
