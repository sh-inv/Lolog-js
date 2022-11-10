import { NavLink } from 'react-router-dom';
import PeriodFilter from './PeriodFilter';
import More from './More';
import styled from 'styled-components';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { SlGraph } from 'react-icons/sl';
import { text3 } from '../../styles/color';

const PostListNavBar = () => {
  const navBar = [
    {
      name: '트렌딩',
      icon: <SlGraph className='icon' />,
      className: 'tab-btn',
      path: '/',
      query: '',
    },
    {
      name: '최신',
      icon: <AiOutlineClockCircle className='icon' />,
      className: 'tab-btn',
      path: '/recent',
      query: '',
    },
  ];

  return (
    <PostListNavBarContainer>
      <div className='nav'>
        <div className='nav-tab'>
          {navBar.map(navItem => (
            <NavLink to={navItem.path} key={navItem.name} className={navItem.className} end>
              {navItem.icon}
              {navItem.name}
            </NavLink>
          ))}
        </div>
        <PeriodFilter />
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

    .nav-tab {
      display: flex;
      width: 14rem;

      .tab-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 7rem;
        height: 3rem;
        margin: 0;
        font-size: 1.125rem;
        color: ${text3};
      }

      .active {
        color: var(--text);
      }
    }
  }

  .more {
    display: flex;
    align-items: center;

    .more-icon {
      font-size: 1.4rem;
    }
  }
`;

export default PostListNavBar;
