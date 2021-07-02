import styled from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px 0 0 0;
`;

export const Container = styled.div`
  display: flex;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 241px;
  margin-left: 20%;
  padding: 40px 0 40px 20px;
`;

export const ContainerImg = styled.div`
  background: ${colors.gray};
  padding: 40px 0;
`;

export const Title = styled.h1`
  line-height: 40px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const TextAbout = styled.span`
  line-height: 24px;
  margin-bottom: 20px;
`;

export const ImgPosition = styled.div`
  margin-left: -10%;
  img {
    width: 80%;
  }
`;
