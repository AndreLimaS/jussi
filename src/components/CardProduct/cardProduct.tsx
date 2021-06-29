import React from "react";
import Button from "../Button/button";
import colors from "../../styles/colors";
import {
  Wrapper,
  Container,
  ImgProduct,
  NumberProduct,
  Title,
  Describe,
  Feature,
} from "./styles";
import ProductImg from "../../assets/images/Ellipse.png";

const CardProduct = () => {
  return (
    <Wrapper>
      <Container>
        <ImgProduct>
          <img src={ProductImg} alt={"Product 1"} />
          <NumberProduct>P1</NumberProduct>
        </ImgProduct>
        <Title>Nome do Produto #1</Title>
        <Describe>Descrição do produto #1</Describe>
        <Feature>• Feature 1</Feature>
        <Feature>• Feature 2</Feature>
        <Feature>• Feature 3</Feature>
        <Button
          text={"Ver Solução"}
          textcolor={colors.black}
          borderColor={colors.green}
          borderRadius={6}
          background={colors.green}
        />
      </Container>
    </Wrapper>
  );
};

export default CardProduct;
