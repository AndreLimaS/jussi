import React from 'react';
import { Wrapper, Container, TitleStores } from './styles';
import logoBrastemp from '../../assets/images/logo-brastemp.png';
import logoBuy from '../../assets/images/logo-compra.png';
import logoConsul from '../../assets/images/logo-consul.png';
import logothebar from '../../assets/images/logo-thebar.png';

const Store = () => {
  return (
    <Wrapper>
      <Container>
        <TitleStores>Nossas principais lojas VTEX</TitleStores>
        <TitleStores> → </TitleStores>
        <img src={logoBrastemp} alt="Brastemp" />
        <img src={logoBuy} alt="Compra Certa" />
        <img src={logoConsul} alt="Consul" />
        <img src={logothebar} alt="The bar" />
      </Container>
    </Wrapper>
  );
};

export default Store;
