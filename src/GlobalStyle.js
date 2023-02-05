import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { lightTheme, darkTheme } from './styles/color';
import IndieFlowerTTFRegular from './fonts/IndieFlowerTTFRegular.ttf';

const GlobalStyle = createGlobalStyle`

  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    background: var(--bg-page2);
    color: var(--text1);
    transition: background-color 0.2s;
  }

  body[data-theme='light'] {
    ${lightTheme};
  }

  body[data-theme='dark'] {
    ${darkTheme};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
  font-size: 100%;
  font-weight: 700;
}

  a {
    text-decoration: none;
    color: var(--text1);
  }


  input {
    outline: none;
  }

  @font-face {
        font-family: 'IndieFlowerTTFRegular';
        src: local('IndieFlowerTTFRegular'), local('IndieFlowerTTFRegular');
        font-style: normal;
        src: url(${IndieFlowerTTFRegular}) format('truetype');
  }
`;

export default GlobalStyle;
