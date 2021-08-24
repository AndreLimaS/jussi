import React from 'react';
import Button from '../../components/Button/Button';
import colors from '../../styles/colors';
import houseJussi from '../../assets/images/jussi-house.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import {
  Wrapper,
  Container,
  ContainerText,
  ContainerImg,
  Title,
  TextAbout,
  ImgPosition
} from './styles';

const About = () => {
  return (
    <Wrapper>
      <Container>
        <ContainerText>
          <Title>Olá, somos a Jüssi</Title>
          <TextAbout>
            A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o
            pensamento voltado para produtos e resolução de problemas. Nosso área dedicada
            exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product
            Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
          </TextAbout>
          <Button
            text={'Conheça a Jüssi'}
            textColor={colors.black}
            borderColor={colors.black}
            borderRadius={6}
            background={colors.white}
          />
        </ContainerText>
      </Container>
      <ContainerImg>
        <ImgPosition>
          <LazyLoadImage src={houseJussi} alt={'Escritório Jussi'} effect="blur"/>
        </ImgPosition>
      </ContainerImg>
    </Wrapper>
  );
};

export default About;
