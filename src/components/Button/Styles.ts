import styled from 'styled-components';
import { ButtonPropsTypes } from './types';

export const ContainerButton = styled.button<ButtonPropsTypes | any>`
  padding: 10px 20px;
  background-color: ${props => props.background && props.background};
  border: 1px solid ${props => props.borderColor};
  color: ${props => props.textColor && props.textColor};
  border-radius: ${props => props.borderRadius && `${props.borderRadius + 'px'}`};
  margin-top: 5%;
  transition: 0.1s;
  :hover {
    transform: scale(1.05);
  }
`;
