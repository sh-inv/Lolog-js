import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AuthModal from '../../components/AuthModal';
import PostListNavBar from '../../components/PostListNavBar';
import { maxWidth1920px, maxWidth1440px, maxWidth1056px, maxWidth1024px, minWidth250px } from '../../styles/media';
import RightIcons from './RightIcons';

const Header = () => {
  const location = useLocation();
  if (window.location.pathname === '/write' || window.location.pathname === '/register') return null;

  const [isLoginModal, setIsLoginModal] = useState(false);

  const [ScrollY, setScrollY] = useState(0);
  const [ScrollActive, setScrollActive] = useState(false);
  const headerRef = useRef();

  const handleScroll = () => {
    if (window.location.pathname !== '/write' && window.location.pathname !== '/register') {
      const headerTop = headerRef.current.offsetTop;
      if (ScrollY > headerTop + 116.4 && window.location.pathname === '/') {
        setScrollY(window.pageYOffset);
        setScrollActive(true);
      } else {
        setScrollY(window.pageYOffset);
        setScrollActive(false);
      }
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', handleScroll);
    };
    scrollListener();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <HeaderPositioner ref={headerRef} ScrollActive={ScrollActive}>
        <div className={ScrollActive ? 'header-fixed' : 'header'}>
          <div className='header-content'>
            <Link className='logo' to='/'>
              velog
            </Link>
            <RightIcons setIsLoginModal={setIsLoginModal} />
          </div>
          {ScrollActive && <PostListNavBar />}
        </div>
      </HeaderPositioner>
      {isLoginModal && <AuthModal isLoginModal={isLoginModal} setIsLoginModal={setIsLoginModal} />}
    </>
  );
};

const HeaderPositioner = styled.div`
  margin: 0 auto;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  max-width: 1728px;

  .header-fixed {
    position: fixed;
    top: 0%;
    left: 50%;
    z-index: 1;
    width: 100%;
    background: var(--bg-element1);
    transform: translate(-50%, 0%);
    .post-list-nav-bar-container {
      max-width: 1728px;
      margin: 0 auto;
    }
  }

  .header {
    .header-content {
      width: 100%;
    }
  }

  .header,
  .header-fixed {
    .header-content {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      padding: ${props => (props.ScrollActive ? '0 1rem' : '0')};
      max-width: 1728px;
      height: ${props => (props.ScrollActive ? '3rem' : '4rem')};

      .logo {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        letter-spacing: 0.2rem;
      }
    }
  }

  ${maxWidth1920px}
  ${maxWidth1440px}
  ${maxWidth1056px}
  ${maxWidth1024px}
  ${minWidth250px}
`;

export default Header;
