import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.pink};
  padding: 100px 0;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  line-height: 40px;
  text-transform: uppercase;
  color: ${colors.white};
  text-align: center;
  padding-bottom: 20px;
`;

export const TextContact = styled.span`
  color: ${colors.white};
  padding-bottom: 10px;
`;

export const TextEmail = styled.h2`
  color: ${colors.white};
  font-weight: 500;
`;
