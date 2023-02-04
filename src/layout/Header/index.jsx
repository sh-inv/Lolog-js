import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetPageNum } from '../../store/modules/mainnavbar';
import RightIcons from './RightIcons';
import PostListNavBar from '../../components/PostListNavBar';
import AuthModal from '../../components/AuthModal';
import matchPathName from '../../hooks/matchPathName';
import styled from 'styled-components';
import { maxWidth1920px, maxWidth1440px, maxWidth1056px, maxWidth1024px, minWidth250px } from '../../styles/media';

const Header = () => {
  const dispatch = useDispatch();
  const { headerTitle, activeHeaderTitle, userId } = matchPathName();
  const headerLenderConditon = window.location.pathname === '/write' || window.location.pathname === '/register';
  const postListNavBarConditon = window.location.pathname === '/' || window.location.pathname === '/recent' || window.location.pathname === '/follow';

  const [isLoginModal, setIsLoginModal] = useState(false);

  const [ScrollY, setScrollY] = useState(0);
  const [ScrollActive, setScrollActive] = useState(false);
  const headerRef = useRef();

  const handleScroll = () => {
    if (window.location.pathname !== '/write' && window.location.pathname !== '/register') {
      const headerTop = headerRef.current.offsetTop;
      if (ScrollY > headerTop + 116.4) {
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
  }, []);

  return (
    <>
      {headerLenderConditon ? null : (
        <>
          <HeaderPositioner ref={headerRef} ScrollActive={ScrollActive}>
            <div className={ScrollActive ? 'header-fixed' : 'header'}>
              <div className='header-content'>
                <span className='logo-box'>
                  <Link
                    className='logo'
                    to='/'
                    onClick={() => {
                      dispatch(resetPageNum());
                    }}
                  >
                    Lolog
                  </Link>
                  {activeHeaderTitle && (
                    <Link className='logo' to={`/${userId}`}>
                      @{headerTitle}
                    </Link>
                  )}
                </span>
                <RightIcons setIsLoginModal={setIsLoginModal} />
              </div>
              {ScrollActive && postListNavBarConditon && <PostListNavBar />}
            </div>
          </HeaderPositioner>
          {isLoginModal && <AuthModal isLoginModal={isLoginModal} setIsLoginModal={setIsLoginModal} />}
        </>
      )}
    </>
  );
};

const HeaderPositioner = styled.div`
  position: relative;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  max-width: 1728px;

  @keyframes header-slidein {
    from {
      transform: translate(-50%, -50%);
    }
    to {
      transform: translate(-50%, 0%);
    }
  }

  .header-fixed {
    position: fixed;
    top: 0%;
    left: 50%;
    z-index: 1;
    width: 100%;
    background: var(--bg-element1);
    transform: translate(-50%, 0%);
    animation: header-slidein 0.1s;
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

      .logo-box {
        display: flex;
        .logo {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          letter-spacing: 0.2rem;

          :nth-child(2) {
            margin-left: 1rem;
          }
        }
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
