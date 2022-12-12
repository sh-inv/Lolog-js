import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BiSearch } from 'react-icons/bi';
import { VscTriangleDown } from 'react-icons/vsc';
import ThemeMode from './ThemeMode';
import ToggleMenuList from './ToggleMenuList';
import AuthModal from '../../components/AuthModal';
import styled from 'styled-components';
import { maxWidth1056px, maxWidth1440px, maxWidth1920px, minWidth250px } from '../../styles/media';
import UserProfileImage from '../../components/UserProfileImage';

const Header = () => {
  const myZoneRef = useRef();
  const toggleMenuRef = useRef();
  const [isToggleOpen, setIsToggleOpen] = useState(false);
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
            {localStorage.getItem('authToken') ? (
              <>
                <Link className='new-post hover-link-btn' to='/write'>
                  새 글 작성
                </Link>
                <div className='my-zone' ref={myZoneRef} onClick={() => setIsToggleOpen(!isToggleOpen)}>
                  <span className='profile'>
                    <UserProfileImage source={localStorage.getItem('userProfileImg')} />
                  </span>
                  <VscTriangleDown className='toggle' />
                </div>
              </>
            ) : (
              <button className='login hover-link-btn' onClick={onLoginModal}>
                로그인
              </button>
            )}
          </RightIcons>
        </Content>
        {isToggleOpen && <ToggleMenuList toggleMenuRef={toggleMenuRef} setIsToggleOpen={setIsToggleOpen} />}
      </Positioner>
      {isLoginModal && <AuthModal isLoginModal={isLoginModal} setIsLoginModal={setIsLoginModal} />}
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
    color: var(--text1);

    svg {
      width: 24px;
      height: 24px;
      pointer-events: none;
    }

    :hover {
      background-color: var(--slight-layer);
      cursor: pointer;
    }
  }

  .hover-link-btn {
    padding: 0.4rem 1rem;
    margin-left: 0.5rem;
    border: 1px solid var(--text1);
    border-radius: 1.3rem;
    background-color: var(--bg-element1);
    color: var(--text1);
    font-size: 1rem;
    font-weight: bold;
    border-radius: 1rem;
    word-break: keep-all;
    transition: all 0.125s ease-in 0s;

    :hover {
      background-color: var(--bg-invert);
      color: var(--text-invert);
      transition: all 0.125s ease-in 0s;
      cursor: pointer;
    }
  }

  .login {
    background: var(--bg-element5);
    color: var(--button-text);

    :hover {
      background: var(--bg-element6);
    }
  }

  .new-post {
    @media only screen and (max-width: 1023px) {
      display: none;
    }
  }

  .my-zone {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.8rem;
    cursor: pointer;

    .profile {
      width: 32px;
      height: 32px;
    }

    .toggle {
      margin-left: 0.5rem;
      transition: all 0.125s ease-in 0s;
      width: 12px;
      color: var(--bg-element9);
    }

    &:hover {
      .toggle {
        color: var(--text1);
      }
    }
  }
`;

export default Header;
