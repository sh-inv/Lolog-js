import { useSelector, useDispatch } from 'react-redux';
import { darkMode, lightMode } from '../../../store/modules/header';
import { HiMoon } from 'react-icons/hi';
import { BsFillSunFill } from 'react-icons/bs';
import styled from 'styled-components';
import { useEffect } from 'react';

const ThemeMode = () => {
  const isDarkMode = useSelector(state => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    isDarkMode ? dispatch(darkMode()) : dispatch(lightMode());
  }, []);

  const changeTheme = e => {
    e.target.className = 'theme-mode-change setting-hover';
    isDarkMode ? dispatch(lightMode()) : dispatch(darkMode());
  };

  return (
    <ThemeModeContainer onClick={changeTheme}>
      <div className='setting-hover'>{isDarkMode ? <HiMoon /> : <BsFillSunFill />}</div>
    </ThemeModeContainer>
  );
};

const ThemeModeContainer = styled.div`
  @keyframes themeChange {
    from {
      width: 10px;
      height: 10px;
      transform: rotate(180deg);
    }
    to {
      width: 24px;
      height: 24px;
    }
  }

  .theme-mode-change {
    svg {
      animation: themeChange 0.1s linear;
    }
  }
`;

export default ThemeMode;
