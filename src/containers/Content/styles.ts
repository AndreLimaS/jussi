import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: ${colors.green};
`;

export const SessionOne = styled.div`
  display: flex;
  margin: 8% 0 8% 20%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const SessionTwo = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 64px;
  line-height: 77px;
  text-transform: uppercase;
  margin-bottom: 5%;
`;

export const SubTitle = styled.span`
  width: 60%;
`;
