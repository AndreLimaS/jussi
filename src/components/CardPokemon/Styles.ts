import styled from "styled-components";
import colors from "../../styles/colors";

export const Wrapper = styled.div`
  display: flex;
  margin: 10px 0;
  padding: 10px;
`;

export const Container = styled.div`
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
`;

export const ContainerCard = styled.div`
  border-radius: 4px;
  border: 1px solid ${colors.gray};
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
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
`;

export const Force = styled.span`
  font-size: 15px;
  line-height: 18px;
  color: ${colors.pink};
  margin-bottom: 20px;
`;
