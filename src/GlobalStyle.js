import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { darkModeBackgroundColor, darkModeFontColor } from './styles/color';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  body {
    background: ${darkModeBackgroundColor};
    color: ${darkModeFontColor};
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
