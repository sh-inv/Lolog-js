import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AuthModal from '../../components/AuthModal';
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
    const snbTop = headerRef.current.offsetTop;
    if (ScrollY > snbTop + 64) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
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
      <HeaderPositioner ref={headerRef}>
        <div className={ScrollActive ? 'header-fixed' : 'header'}>
          <div className='header-content'>
            <Link className='logo' to='/'>
              velog
            </Link>
            <RightIcons setIsLoginModal={setIsLoginModal} />
          </div>
        </div>
      </HeaderPositioner>
      {isLoginModal && <AuthModal isLoginModal={isLoginModal} setIsLoginModal={setIsLoginModal} />}
    </>
  );
};

const HeaderPositioner = styled.div`
  margin: 0 auto;
  padding: 0 1rem;

  .header-fixed {
    position: fixed;
    top: 0%;
    left: 50%;
    z-index: 1;
    padding: 0 1rem;
    background: var(--bg-element1);
    transform: translate(-50%, 0%);
  }

  .header,
  .header-fixed {
    .header-content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 4rem;

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
