import styled from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  border: 1px solid ${colors.gray};
  width: 240px;
  border-radius: 4px;
  margin: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ImgProduct = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 70px;
`;

export const NumberProduct = styled.h2`
  position: absolute;
  text-align: center;
  margin-left: 39px;
`;

export const Title = styled.span`
  margin-bottom: 20px;
`;

export const Describe = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: ${colors.pink};
  margin-bottom: 20px;
`;

export const Feature = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: ${colors.darkGray};
`;
