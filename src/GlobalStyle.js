import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { darkModeBackgroundColor, darkModeFontColor } from './styles/color';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  body {
    /* max-width: 1728px; */
    background: ${darkModeBackgroundColor};
    color: ${darkModeFontColor};
  }
  a {
    text-decoration: none;
  }
  input {
    outline: none;
  }
`;

export default GlobalStyle;
