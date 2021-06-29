import React from "react";
import Button from "../../components/Button/button";
import CardBuy from "../../components/CardBuy/cardBuy";
import colors from "../../styles/colors";
import { Container, Title, SubTitle, SessionOne, SessionTwo } from "./styles";
import drink from "../../assets/images/drink.png";
import eletronicOne from "../../assets/images/eletronicOne.png";
import eletronicTwo from "../../assets/images/eletronicTwo.png";

const Content = () => {
  return (
    <Container>
      <SessionOne>
        <Title>
          Criamos <br />
          lojas que <br />
          vendem mais.
        </Title>
        <SubTitle>
          A Jüssi é especialista na criação de lojas
          {"\n"} usando a plataforma VTEX. Precisa criar sua
          {"\n"} loja ou migrar de plataforma?
        </SubTitle>
        <Button
          text="Veja nossas soluções"
          textcolor={colors.black}
          borderColor={colors.black}
          borderRadius={6}
          background={colors.green}
        />
      </SessionOne>
      <SessionTwo>
        <CardBuy
          image={eletronicOne}
          text={"Batedeira"}
          top={20}
          zIndex={99}
          button={
            <Button
              text="Comprar em 12x"
              textcolor={colors.pink}
              borderColor={colors.pink}
              background={colors.white}
              borderRadius={24}
            />
          }
        ></CardBuy>
        <CardBuy
          image={eletronicTwo}
          text={"Geladeira"}
          top={160}
          left={-260}
          button={
            <Button
              text="Mais detalhes"
              textcolor={colors.pink}
              borderColor={colors.pink}
              background={colors.white}
              borderRadius={24}
            />
          }
        ></CardBuy>
        <CardBuy
          image={drink}
          text={"Whisky"}
          top={190}
          left={250}
          button={
            <Button
              text="Adicionar à sacola"
              textcolor={colors.pink}
              borderColor={colors.pink}
              background={colors.white}
              borderRadius={24}
            />
          }
        ></CardBuy>
      </SessionTwo>
    </Container>
  );
};

export default Content;
