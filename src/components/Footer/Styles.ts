import styled from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  background: ${colors.black};
  padding: 10px 0;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const Social = styled.div`
  img {
    padding: 0 10px;
    cursor: pointer;
  }
`;
