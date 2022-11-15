import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { lightTheme, darkTheme } from './styles/color';

const GlobalStyle = createGlobalStyle`

  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    margin-top: 4rem;
    ${lightTheme}
    background: var(--bg-page1);
    color: var(--text1);
    transition: background-color 0.2s;
  }

  @media (prefers-color-scheme: dark) {
    body {
      ${darkTheme}
      background: var(--bg-page1);
      color: var(--text1);
    }
  }

  body[data-theme='light'] {
    ${lightTheme};
  }

  body[data-theme='dark'] {
    ${darkTheme};
  }

  a {
    text-decoration: none;
    color: var(--text1);
  }


  input {
    outline: none;
  }
`;

export default GlobalStyle;
