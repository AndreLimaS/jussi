import styled from "styled-components";

export const StyleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

export const Content = styled.div`
  grid-area: content;
`;

export const Footer = styled.div`
  grid-area: footer;
`;
