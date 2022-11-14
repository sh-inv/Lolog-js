import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BiSearch } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { VscTriangleDown } from 'react-icons/vsc';
import ThemeMode from './ThemeMode';
import ToggleMenuList from './ToggleMenuList';
import Login from '../../components/Login';
import styled from 'styled-components';
import { backgroundElement5, backgroundElement6, backgroundElement9, buttonText } from '../../styles/color';
import { maxWidth1056px, maxWidth1440px, maxWidth1920px, minWidth250px } from '../../styles/media';

const Header = () => {
  const myZoneRef = useRef();
  const toggleMenuRef = useRef();
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [toggleMenuList, setToggleMenuList] = useState();
  const [isLoginModal, setIsLoginModal] = useState(false);

  const onLoginModal = () => {
    setIsLoginModal(true);
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
    <>
      <Positioner>
        <Content>
          <Link className='logo' to='/'>
            velog
          </Link>
          <RightIcons>
            <ThemeMode />
            <Link className='search setting-hover' to='/search'>
              <BiSearch />
            </Link>
            <button className='login' onClick={onLoginModal}>
              로그인
            </button>
            <Link className='new-post' to='/write'>
              새 글 작성
            </Link>
            <div className='my-zone' ref={myZoneRef} onClick={() => setIsToggleOpen(!isToggleOpen)}>
              <CgProfile className='profile' />
              <VscTriangleDown className='toggle' />
            </div>
          </RightIcons>
        </Content>
        {isToggleOpen && toggleMenuList && <ToggleMenuList toggleMenuRef={toggleMenuRef} toggleMenuList={toggleMenuList} setIsToggleOpen={setIsToggleOpen} />}
      </Positioner>
      <Login isLoginModal={isLoginModal} setIsLoginModal={setIsLoginModal} onLoginModal={onLoginModal} />
    </>
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
  width: 1728px;

  ${maxWidth1920px}
  ${maxWidth1440px}
  ${maxWidth1056px}
  ${minWidth250px}
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 4rem;

  .logo {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;

    @media only screen and (max-width: 1023px) {
      font-size: 1.25rem;
    }
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

  .login {
    height: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    border-radius: 1rem;
    border: none;
    outline: none;
    font-weight: bold;
    word-break: keep-all;
    background: ${backgroundElement5};
    color: ${buttonText};
    transition: all 0.125s ease-in 0s;
    cursor: pointer;

    :hover {
      background: ${backgroundElement6};
    }

    &:hover {
      box-shadow: rgb(0 0 0 / 19%) 0px 2px 12px;
    }
  }

  .new-post {
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
      color: ${backgroundElement9};

      :hover {
        color: var(--toggle-hover);
      }
    }
  }
`;

export default Header;
