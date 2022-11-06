import { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { darkMode, lightMode } from '../../store/modules/header';
import MediaQuery from 'react-responsive';
import { toggle } from '../../styles/color';
import { HiMoon } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { BsFillSunFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { VscTriangleDown } from 'react-icons/vsc';

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const isDarkMode = useSelector(state => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  const changeTheme = e => {
    e.target.className = 'theme-mode-change setting-hover';
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
          <a className='search setting-hover' href='/search'>
            <BiSearch />
          </a>
          <MediaQuery minWidth={1024}>
            <div className='new-post'>
              <a href='/'>새 글 작성</a>
            </div>
          </MediaQuery>
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
          <MediaQuery maxWidth={1023}>
            <a>새 글 작성</a>
          </MediaQuery>
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
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
  padding: 0 1rem;
  width: 1024px;
  max-width: 1728px;
  min-width: 250px;

  @media only screen and (max-width: 1023px) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;

  @media only screen and (max-width: 1023px) {
    font-size: 1.25rem;
  }
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
      pointer-events: none;
    }

    :hover {
      background-color: rgba(255, 255, 255, 0.1);
      cursor: pointer;
    }
  }

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

  .new-post {
    a {
      padding: 0.4rem 1rem;
      margin-left: 0.5rem;
      border: 1px solid var(--text);
      border-radius: 1.3rem;
      background-color: var(--new-post-btn-background);
      font-size: 1rem;
      font-weight: bold;

      :hover {
        background-color: var(--new-post-btn-hover-background);
        color: var(--new-post-btn-hover-text);
        transition: all 0.125s ease-in 0s;
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
      color: ${toggle};
    }

    :hover {
      svg {
        color: var(--toggle-hover);
      }
    }
  }
`;

const ToggleMenu = styled.div`
  width: 12rem;
  margin-top: 0.3rem;
  margin-left: auto;
  background-color: var(--toggle-background);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;

  a {
    display: block;
    padding: 1.25rem;
    font-size: 0.9rem;
    cursor: pointer;
    :hover {
      color: var(--a-tag-hover-text);
      background-color: var(--a-tag-hover-background);
    }
  }
`;
