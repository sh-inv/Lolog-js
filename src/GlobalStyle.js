import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  body {
  }
  a {
    text-decoration: none;
  }
  input {
    outline: none;
  }
`;

export default GlobalStyle;
