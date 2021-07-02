import styled from 'styled-components';
import colors from '../../styles/colors';
import { CardBuyProps } from './types';

export const Container = styled.div<CardBuyProps | any>`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  width: 209px;
  height: 271px;
  margin-top: ${props => (props.top ? `${props.top + 'px'}` : '0')};
  margin-left: ${props => (props.left ? `${props.left + 'px'}` : '0')};
  z-index: ${props => (props.zIndex ? props.zIndex : 0)};
  border-radius: 8px;
  box-shadow: 0px 32px 32px rgba(0, 0, 0, 0.25);
  img {
    margin-bottom: 5%;
  }
`;
