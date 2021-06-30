import React from "react";
import Button from "../../components/Button/button";
import colors from "../../styles/colors";
import houseJussi from "../../assets/images/jussi-house.png";
import {
  Wrapper,
  Container,
  ContainerText,
  ContainerImg,
  Title,
  TextAbout,
  ImgPosition,
} from "./styles";

const About = () => {
  return (
    <Wrapper>
      <Container>
        <ContainerText>
          <Title>Olá, somos a Jüssi</Title>
          <TextAbout>
            A Jüssi é uma agência integrante do grupo global WPP que vem há 10
            anos consolidando o pensamento voltado para produtos e resolução de
            problemas. Nosso área dedicada exclusivamente para Produtos Digitais
            é organizada em 6 especialidades: Product Managamenet, User
            Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
          </TextAbout>
          <Button
            text={"Conheça a Jüssi"}
            textcolor={colors.black}
            borderColor={colors.black}
            borderRadius={6}
            background={colors.white}
          />
        </ContainerText>
      </Container>
      <ContainerImg>
        <ImgPosition>
          <img src={houseJussi} alt={"Escritório Jussi"} />
        </ImgPosition>
      </ContainerImg>
    </Wrapper>
  );
};

export default About;
