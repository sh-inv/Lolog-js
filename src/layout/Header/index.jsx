import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AuthModal from '../../components/AuthModal';
import { maxWidth1920px, maxWidth1440px, maxWidth1056px, maxWidth1024px, minWidth250px } from '../../styles/media';
import RightIcons from './RightIcons';

const Header = () => {
  const [isLoginModal, setIsLoginModal] = useState(false);
  const location = useLocation();

  if (window.location.pathname === '/write' || window.location.pathname === '/register') return null;

  return (
    <>
      <HeaderPositioner>
        <div className='header-content'>
          <Link className='logo' to='/'>
            velog
          </Link>
          <RightIcons setIsLoginModal={setIsLoginModal} />
        </div>
      </HeaderPositioner>
      {isLoginModal && <AuthModal isLoginModal={isLoginModal} setIsLoginModal={setIsLoginModal} />}
    </>
  );
};

const HeaderPositioner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0%;
  left: 50%;
  z-index: 1;
  width: 1728px;
  padding: 0 1rem;
  transform: translate(-50%, 0%);

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

  ${maxWidth1920px}
  ${maxWidth1440px}
  ${maxWidth1056px}
  ${maxWidth1024px}
  ${minWidth250px}
`;

export default Header;
