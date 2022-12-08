import { NavLink, useLocation } from 'react-router-dom';
import PeriodFilter from './PeriodFilter';
import More from './More';
import styled from 'styled-components';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { SlGraph } from 'react-icons/sl';
import { BsFillPeopleFill } from 'react-icons/bs';

const PostListNavBar = () => {
  const isLogin = localStorage.getItem('authToken');
  const location = useLocation();
  const navBar = [
    {
      name: '트렌딩',
      icon: <SlGraph className='icon' />,
      path: '/',
      query: 'trend',
    },
    {
      name: '최신',
      icon: <AiOutlineClockCircle className='icon' />,
      path: '/recent',
      query: 'recent',
    },
  ];

  return (
    <PostListNavBarContainer>
      <div className='nav'>
        <NavTab isLogin={isLogin}>
          {navBar.map(navItem => (
            <NavLink to={navItem.path} key={navItem.name} className='tab-btn' end>
              {navItem.icon}
              {navItem.name}
            </NavLink>
          ))}
          {isLogin && (
            <NavLink to='/follow' className='tab-btn' end>
              <BsFillPeopleFill className='icon' />
              팔로우
            </NavLink>
          )}
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
  margin-top: 1.5rem;

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

  .tab-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7rem;
    height: 3rem;
    margin: 0;
    font-size: 1.125rem;
    color: var(--text3);
  }

  .active {
    color: var(--text1);
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
      // location.pathname === '/' ? '0' : '50%';
    }
  }};
  display: block;
  width: ${({ isLogin }) => (isLogin ? '33.33333333333%' : '50%')};
  height: 2px;
  background: #fff;
  transition: ease all 0.3s;
`;

export default PostListNavBar;
