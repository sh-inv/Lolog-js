import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { VscTriangleDown } from 'react-icons/vsc';
import ThemeMode from './ThemeMode';
import UserProfileImage from '../../../components/UserProfileImage';
import ToggleMenuList from './ToggleMenuList';
import styled from 'styled-components';

const RightIcons = ({ setIsLoginModal }) => {
  const isLogin = localStorage.getItem('authToken') !== null;
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const toggleRef = useRef();
  const toggleMenuRef = useRef();

  useEffect(() => {
    const closeToggleMenu = e => {
      if (isToggleOpen && !toggleMenuRef.current.contains(e.target) && !toggleRef.current.contains(e.target)) {
        setIsToggleOpen(false);
      }
    };
    document.addEventListener('mousedown', closeToggleMenu);
    return () => {
      document.removeEventListener('mousedown', closeToggleMenu);
    };
  }, [isToggleOpen]);

  return (
    <RightIconsContainer className='right-icons-container'>
      <ThemeMode />
      <Link className='setting-hover search' to='/search'>
        <BiSearch />
      </Link>
      {isLogin ? (
        <>
          <Link className='hover-link-btn new-post' to='/write'>
            새 글 작성
          </Link>
          <div className='toggle-open-container' ref={toggleRef} onClick={() => setIsToggleOpen(!isToggleOpen)}>
            <UserProfileImage source={localStorage.getItem('userProfileImg')} />
            <VscTriangleDown className='toggle' />
          </div>
          {isToggleOpen && <ToggleMenuList toggleMenuRef={toggleMenuRef} setIsToggleOpen={setIsToggleOpen} />}
        </>
      ) : (
        <button className='hover-link-btn login' onClick={() => setIsLoginModal(true)}>
          로그인
        </button>
      )}
    </RightIconsContainer>
  );
};

const RightIconsContainer = styled.div`
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

  .toggle-open-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.8rem;
    cursor: pointer;

    .user-profile-image-container {
      width: 32px;
      height: 32px;
    }

    .toggle {
      position: relative;
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

  .login {
    background: var(--bg-element5);
    color: var(--button-text);

    :hover {
      background: var(--bg-element6);
    }
  }
`;

export default RightIcons;
