import React from 'react';
import Button from '../../components/Button/Button';
import { Container, ContainerInput, Title, InputEmail } from './styles';
import colors from '../../styles/colors';

const Newsletter = () => {
  return (
    <Container>
      <Title>
        receba novidades da nossa área
        <br /> de produtos digitais.
      </Title>
      <ContainerInput>
        <InputEmail type={'email'} placeholder={'Digite seu e-mail'} />
        <Button
          text={'CADASTRAR'}
          textColor={colors.green}
          borderColor={colors.black}
          borderRadius={0}
          background={colors.black}
        />
      </ContainerInput>
    </Container>
  );
};

export default Newsletter;
