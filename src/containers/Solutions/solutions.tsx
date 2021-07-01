import React, { useState, useEffect, useCallback } from "react";
import Button from "../../components/Button/Button";
import CardProduct from "../../components/CardProduct/CardProduct";
import colors from "../../styles/colors";
import getproducts from "../../services/api/products/products";
import { ProductPropsTypes } from "../../components/CardProduct/types";
import {
  Container,
  ContainerProduct,
  TitleSolutions,
  Title,
  LineTitle,
} from "./styles";

const Solutions = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  });

  const getProducts = useCallback(() => {
    getproducts()
      .then((response: any) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log("Erro: ", error);
      });
  }, []);

  return (
    <Container>
      <TitleSolutions>
        <LineTitle>{"//"}</LineTitle>
        <Title>Nossas soluções</Title>
      </TitleSolutions>
      <ContainerProduct>
        {products?.map(
          (
            { img, number, name, describe, feature }: ProductPropsTypes,
            index: number
          ) => (
            <CardProduct
              key={index}
              img={img}
              number={number}
              name={name}
              describe={describe}
              feature={feature}
              button={
                <Button
                  text={"Ver Solução"}
                  textColor={colors.black}
                  borderColor={colors.green}
                  borderRadius={6}
                  background={colors.green}
                />
              }
            />
          )
        )}
      </ContainerProduct>
    </Container>
  );
};

export default Solutions;
