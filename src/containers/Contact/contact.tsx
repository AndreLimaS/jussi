import React from 'react';
import { Container, Title, TextContact, TextEmail } from './styles';

const Contact = () => {
  return (
    <Container>
      <Title>
        Essa loja foi construída usando uma das
        <br /> nossas soluções da plataforma VTEX. <br />
        tenha a sua.
      </Title>
      <TextContact>Entre em contato</TextContact>
      <TextEmail>comercial@jussi.com.br</TextEmail>
    </Container>
  );
};

export default Contact;
