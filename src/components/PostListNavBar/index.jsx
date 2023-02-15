import { useLocation, useNavigate } from 'react-router-dom';
import PeriodFilter from './PeriodFilter';
import More from './More';
import styled from 'styled-components';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { SlGraph } from 'react-icons/sl';
import { BsFillPeopleFill } from 'react-icons/bs';
import { IoPeople } from 'react-icons/io5';

const PostListNavBar = () => {
  const isLogin = localStorage.getItem('authToken');
  const location = useLocation();
  const navigate = useNavigate();
  const navBar = [
    {
      name: '트렌딩',
      icon: <SlGraph className='icon' />,
      path: '/',
      query: 'trend',
      view: true,
    },
    {
      name: '최신',
      icon: <AiOutlineClockCircle className='icon' />,
      path: '/recent',
      query: 'recent',
      view: false,
    },
    {
      name: '팔로우',
      icon: <IoPeople className='icon' />,
      path: '/follow',
      query: 'follow',
      view: false,
    },
  ];

  return (
    <PostListNavBarContainer className='post-list-nav-bar-container'>
      <div className='nav'>
        <NavTab isLogin={isLogin}>
          {navBar.map(navItem => (
            <Button
              key={navItem.name}
              onClick={() => {
                navigate(`${navItem.path}`);
              }}
              disabled={location.pathname === navItem.path}
              isLogin={isLogin}
              path={location.pathname === navItem.path}
            >
              {navItem.icon}
              {navItem.name}
            </Button>
          ))}
          <SlideBorder location={location} isLogin={isLogin} />
        </NavTab>
        {location.pathname === '/' && <PeriodFilter />}
      </div>
      <More />
    </PostListNavBarContainer>
  );
};

const PostListNavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    font-size: 1.4rem;
    margin-right: 0.5rem;
  }
  .nav {
    position: relative;
    display: flex;
    align-items: center;
  }

  .more {
    display: flex;
    align-items: center;

    .more-icon {
      font-size: 1.4rem;
    }
  }
`;

const NavTab = styled.div`
  position: relative;
  display: flex;
  width: ${({ isLogin }) => (isLogin ? '21rem' : '14rem')};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 3rem;
  margin: 0;
  border: none;
  font-size: 1.125rem;
  background: none;
  color: ${({ path }) => (path ? 'var(--text1)' : 'var(--text3)')};
  cursor: pointer;

  :nth-last-child(2) {
    display: ${({ isLogin }) => (isLogin ? 'inherit' : 'none')};
  }
`;

const SlideBorder = styled.div`
  position: absolute;
  bottom: 0;
  left: ${({ location, isLogin }) => {
    if (isLogin) {
      if (location.pathname === '/') {
        return '0';
      } else if (location.pathname === '/recent') {
        return '33.33333333333%';
      } else if (location.pathname === '/follow') {
        return '66.66666666666%';
      }
    } else {
      if (location.pathname === '/') {
        return '0';
      }
      return '50%';
    }
  }};
  display: block;
  width: ${({ isLogin }) => (isLogin ? '33.33333333333%' : '50%')};
  height: 2px;
  background: var(--border1);
  transition: ease all 0.3s;
`;

export default PostListNavBar;
