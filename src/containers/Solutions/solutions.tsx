import React, { useState, useEffect, useCallback } from "react";
import Button from "../../components/Button/button";
import CardProduct from "../../components/CardProduct/cardProduct";
import colors from "../../styles/colors";
import { listproducts } from "../../services/Product/listProduct";
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
    listproducts()
      .then((response) => {
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
                  textcolor={colors.black}
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
