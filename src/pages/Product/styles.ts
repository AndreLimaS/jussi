import styled from "styled-components";
import colors from "../../styles/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${colors.gray};
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TitleProducts = styled.div`
  display: flex;
  margin: 40px 0 20px 40px;
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
