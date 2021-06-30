import styled from "styled-components";
import colors from "../../styles/colors";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.gray};
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  img {
    cursor: pointer;
  }
`;

export const TitleStores = styled.span``;
