import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.black};
  padding: 100px 0;
`;

export const ContainerInput = styled.div`
  display: flex;
  background: ${colors.black};
  border-bottom: 1px solid ${colors.green};
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  width: 530px;
  Button {
    margin-top: 0;
    padding-right: 0;
    font-weight: bold;
  }
`;

export const Title = styled.h1`
  color: ${colors.white};
  padding-bottom: 50px;
  line-height: 40px;
  text-transform: uppercase;
  text-align: center;
`;

export const InputEmail = styled.input`
  border: none;
  background: ${colors.black};
  color: ${colors.white};
  ::placeholder {
    color: ${colors.white};
  }
`;
