import React from "react";
import Button from "../../components/Button/button";
import colors from "../../styles/colors";
import { Container, Title, SubTitle, SessionOne, SessionTwo } from "./styles";

const Content = () => {
  return (
    <Container>
      <SessionOne>
        <Title>Criamos lojas que vendem mais.</Title>
        <SubTitle>
          A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
          Precisa criar sua loja ou migrar de plataforma?
        </SubTitle>
        <Button
          text="Veja nossas soluções"
          textcolor={colors.black}
          borderColor={colors.black}
          borderRadius={6}
          background={colors.green}
        />
      </SessionOne>
    </Container>
  );
};

export default Content;
