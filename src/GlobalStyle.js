import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import {
  darkModeBackgroundColor,
  darkModeFontColor,
  lightModeBackgroundColor,
  lightModeFontColor,
  darkModeNewPostBtnColor,
  lightModeNewPostBtnColor,
  darkModeToggle,
  lightModeToggle,
  darkModeToggleBackgound,
  lightModeToggleBackgound,
} from './styles/color';

const GlobalStyle = createGlobalStyle`

  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    background: ${props => (props.isDarkMode ? darkModeBackgroundColor : lightModeBackgroundColor)};
    color: ${props => (props.isDarkMode ? darkModeFontColor : lightModeFontColor)};
    max-width: 1728px;
  }

  :root {
    --text: ${props => (props.isDarkMode ? darkModeFontColor : lightModeFontColor)};
    --new-post-btn-background: ${props => (props.isDarkMode ? darkModeNewPostBtnColor : lightModeNewPostBtnColor)};
    --new-post-btn-hover-text: ${props => (props.isDarkMode ? lightModeFontColor : darkModeFontColor)};
    --new-post-btn-hover-background: ${props => (props.isDarkMode ? lightModeNewPostBtnColor : darkModeNewPostBtnColor)};
    --toggle-hover: ${props => (props.isDarkMode ? darkModeToggle : lightModeToggle)};
    --toggle-background: ${props => (props.isDarkMode ? darkModeToggleBackgound : lightModeToggleBackgound)};
  }

  a {
    text-decoration: none;

    :visited {
      color: ${props => (props.isDarkMode ? darkModeFontColor : lightModeFontColor)};
  }
  }


  input {
    outline: none;
  }
`;

export default GlobalStyle;
