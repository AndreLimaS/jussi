import React from "react";
import Button from "../../components/Button/button";
import CardProduct from "../../components/CardProduct/cardProduct";
import colors from "../../styles/colors";
import ProductImg from "../../assets/images/Ellipse.png";
import {
  Container,
  ContainerProduct,
  TitleSolutions,
  Title,
  LineTitle,
} from "./styles";

const Solutions = () => {
  return (
    <Container>
      <TitleSolutions>
        <LineTitle>{"//"}</LineTitle>
        <Title>Nossas soluções</Title>
      </TitleSolutions>
      <ContainerProduct>
        <CardProduct
          img={ProductImg}
          number={"P1"}
          name={"Nome do Produto #1"}
          describe={"Descrição do produto #1"}
          feature={["Feature 1", "Feature 2", "Feature 3"]}
          button={
            <Button
              text={"Ver Solução"}
              textcolor={colors.black}
              borderColor={colors.green}
              borderRadius={6}
              background={colors.green}
            />
          }
        />
      </ContainerProduct>
    </Container>
  );
};

export default Solutions;
