import { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { darkMode, lightMode } from '../../store/modules/header';
import { darkModeBackgroundColor, darkModeFontColor } from '../../styles/color';
import { HiMoon } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { BsFillSunFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { VscTriangleDown } from 'react-icons/vsc';

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const isDarkMode = useSelector(state => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  const changeTheme = () => {
    isDarkMode ? dispatch(lightMode()) : dispatch(darkMode());
  };

  return (
    <Positioner>
      <Content>
        <Logo href='/'>velog</Logo>
        <RightIcons>
          <div className='theme-mode setting-hover' onClick={changeTheme}>
            {isDarkMode ? <HiMoon /> : <BsFillSunFill />}
          </div>
          <a className='search setting-hover' href='/'>
            <BiSearch />
          </a>
          <div className='new-post'>
            <a href='/'>새 글 작성</a>
          </div>
          <div className='profile' onClick={() => setIsToggleOpen(!isToggleOpen)}>
            <CgProfile />
          </div>
          <div className='toggle' onClick={() => setIsToggleOpen(!isToggleOpen)}>
            <VscTriangleDown />
          </div>
        </RightIcons>
      </Content>
      {isToggleOpen && (
        <ToggleMenu>
          <a href='/'>내 벨로그</a>
          <a href='/'>임시 글</a>
          <a href='/'>읽기 목록</a>
          <a href='/'>로그아웃</a>
        </ToggleMenu>
      )}
    </Positioner>
  );
};

export default Header;

const Positioner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 4rem;

  a:visited {
    color: ${darkModeFontColor};
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1728px;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
`;

const RightIcons = styled.div`
  display: flex;
  align-items: center;

  .setting-hover {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-left: 0.3rem;
    border-radius: 40px;

    svg {
      width: 24px;
      height: 24px;
    }

    :hover {
      background-color: rgba(255, 255, 255, 0.1);
      cursor: pointer;
    }
  }

  .new-post {
    a {
      padding: 0.4rem 1rem;
      margin-left: 0.5rem;
      border: 1px solid ${darkModeFontColor};
      border-radius: 1.3rem;
      font-size: 1rem;
      font-weight: bold;
      transition: all 0.125s ease-in 0s;

      :hover {
        background-color: ${darkModeFontColor};
        color: ${darkModeBackgroundColor};
      }
    }
  }

  .profile {
    margin-left: 0.8rem;
    cursor: pointer;

    svg {
      width: 32px;
      height: 32px;
    }
  }

  .toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
    transition: all 0.125s ease-in 0s;
    cursor: pointer;

    svg {
      width: 12px;
      color: #acacac;
    }

    :hover {
      svg {
        color: #ececec;
      }
    }
  }
`;

const ToggleMenu = styled.div`
  position: absolute;
  right: 0;
  top: 4rem;
  width: 12rem;
  margin-top: 0.3rem;
  margin-right: 5%;
  background-color: #1e1e1e;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;

  a {
    display: block;
    padding: 1.25rem;
    font-size: 0.9rem;
    cursor: pointer;
    :hover {
      color: #96f2d7;
    }
  }
`;
