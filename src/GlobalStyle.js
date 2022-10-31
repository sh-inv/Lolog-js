import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  body {
    max-width: 1728px;
  }
  a {
    text-decoration: none;
  }
  input {
    outline: none;
  }
`;

export default GlobalStyle;
