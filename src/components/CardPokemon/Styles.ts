import styled from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  margin: 10px 0;
  padding: 15px 10px;
`;

export const ContainerDeitals = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

export const ContainerCard = styled.div`
  border-radius: 4px;
  border: 1px solid ${colors.gray};
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
    box-shadow: 0px 32px 32px rgba(0, 0, 0, 0.25);
  }
`;

export const ImgProduct = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;

export const Title = styled.span`
  font-size: 19px;
  margin-bottom: 10px;
  align-self: flex-start;
`;

export const Force = styled.span`
  font-size: 15px;
  line-height: 18px;
  color: ${colors.pink};
  margin-bottom: 20px;
  align-self: flex-start;
`;
