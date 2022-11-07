import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { darkMode, lightMode } from '../../store/modules/header';
import { toggle } from '../../styles/color';
import { HiMoon } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { BsFillSunFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { VscTriangleDown } from 'react-icons/vsc';
import styled from 'styled-components';

const Header = () => {
  const toggleMenuRef = useRef();
  const myZoneRef = useRef();
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [toggleMenuList, setToggleMenuList] = useState();
  const isDarkMode = useSelector(state => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  const changeTheme = e => {
    e.target.className = 'theme-mode-change setting-hover';
    isDarkMode ? dispatch(lightMode()) : dispatch(darkMode());
  };

  useEffect(() => {
    const closeToggleMenu = e => {
      if (isToggleOpen && !toggleMenuRef.current.contains(e.target) && !myZoneRef.current.contains(e.target)) {
        setIsToggleOpen(false);
      }
    };
    document.addEventListener('mousedown', closeToggleMenu);
    return () => {
      document.removeEventListener('mousedown', closeToggleMenu);
    };
  }, [isToggleOpen]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { toggle },
        } = await axios.get('data/header/toggle.json');
        setToggleMenuList(toggle);
      } catch (error) {
        console.log('error => ', error);
      }
    })();
  }, []);

  return (
    <Positioner>
      <Content>
        <Logo to='/'>velog</Logo>
        <RightIcons>
          <div className='theme-mode setting-hover' onClick={changeTheme}>
            {isDarkMode ? <HiMoon /> : <BsFillSunFill />}
          </div>
          <Link className='search setting-hover' to='/search'>
            <BiSearch />
          </Link>
          <div className='new-post'>
            <Link to='/write'>새 글 작성</Link>
          </div>
          <div className='my-zone' ref={myZoneRef} onClick={() => setIsToggleOpen(!isToggleOpen)}>
            <CgProfile className='profile' />
            <VscTriangleDown className='toggle' />
          </div>
        </RightIcons>
      </Content>
      {isToggleOpen && toggleMenuList && (
        <ToggleMenu ref={toggleMenuRef}>
          {toggleMenuList.map(menu => {
            return (
              <Link key={menu.name} className='link-tag' to={menu.path} onClick={() => setIsToggleOpen(false)}>
                {menu.name}
              </Link>
            );
          })}
        </ToggleMenu>
      )}
    </Positioner>
  );
};

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

  @media only screen and (min-width: 1440px) {
    width: 1376px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
`;

const Logo = styled(Link)`
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

    @media only screen and (max-width: 1023px) {
      display: none;
    }
  }

  .my-zone {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.8rem;

    .profile {
      width: 32px;
      height: 32px;
      cursor: pointer;
    }

    .toggle {
      margin-left: 0.5rem;
      transition: all 0.125s ease-in 0s;
      cursor: pointer;

      width: 12px;
      color: ${toggle};

      :hover {
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

  .link-tag {
    display: block;
    padding: 1.25rem;
    font-size: 0.9rem;
    cursor: pointer;

    :nth-child(2) {
      @media only screen and (min-width: 1024px) {
        display: none;
      }
    }

    :hover {
      color: var(--a-tag-hover-text);
      background-color: var(--a-tag-hover-background);
    }
  }
`;

export default Header;
