import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${colors.white};
    font-family: Barlow, Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input:focus-visible {
    outline: none;
  }
`;
