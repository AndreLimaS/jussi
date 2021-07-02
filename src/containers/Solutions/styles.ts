import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ContainerProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const TitleSolutions = styled.div`
  display: flex;
  margin: 40px 0 20px 40px;
  width: 80%;
`;

export const Title = styled.h1`
  text-transform: uppercase;
`;

export const LineTitle = styled.h1`
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
  color: ${colors.green};
  margin-right: 10px;
`;
