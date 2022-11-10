import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import {
  lightModeBackgroundColor,
  backgroundElement6,
  lightModeFontColor,
  lightModeNewPostBtnColor,
  lightModeToggle,
  lightModeToggleBackgound,
  lightModeATagHoverText,
  lightModeATagHoverBackground,
  backgroundPage,
  backgroundElement1,
  primary1,
  border4,
  backgroundElement5,
  text1,
  text2,
  text3,
  text5,
  border3,
  border5,
  backgroundElement9,
} from './styles/color';

const GlobalStyle = createGlobalStyle`

  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    margin-top: 4rem;
    background: ${props => (props.isDarkMode ? backgroundPage : backgroundElement6)};
    color: ${props => (props.isDarkMode ? text1 : lightModeFontColor)};
    transition: background-color 0.2s;
  }

  :root {
    --text: ${props => (props.isDarkMode ? text1 : lightModeFontColor)};
    --new-post-btn-background: ${props => (props.isDarkMode ? backgroundElement1 : lightModeBackgroundColor)};
    --new-post-btn-hover-text: ${props => (props.isDarkMode ? lightModeFontColor : text1)};
    --new-post-btn-hover-background: ${props => (props.isDarkMode ? lightModeNewPostBtnColor : backgroundElement1)};
    --toggle-hover: ${props => (props.isDarkMode ? text1 : lightModeToggle)};
    --toggle-background: ${props => (props.isDarkMode ? backgroundElement1 : lightModeToggleBackgound)};
    --a-tag-hover-text: ${props => (props.isDarkMode ? primary1 : lightModeATagHoverText)};
    --a-tag-hover-background: ${props => (props.isDarkMode ? backgroundElement1 : lightModeATagHoverBackground)};
    --post-border-top: ${props => (props.isDarkMode ? border4 : backgroundElement5)};
    --postlist-navbar-filter-color: ${props => (props.isDarkMode ? text2 : text5)};
    --postlist-navbar-more-btn-color: ${props => (props.isDarkMode ? text3 : backgroundElement9)};
    --postlist-navbar-more-border-top: ${props => (props.isDarkMode ? border3 : border5)};
  }

  a {
    text-decoration: none;

    :visited {
      color: ${props => (props.isDarkMode ? text1 : lightModeFontColor)};
  }
  }


  input {
    outline: none;
  }
`;

export default GlobalStyle;
