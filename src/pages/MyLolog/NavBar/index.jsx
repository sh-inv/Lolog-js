import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  const location = useLocation();
  const myNav = [
    {
      id: 1,
      path: '',
      title: '글',
    },
    {
      id: 2,
      path: 'series',
      title: '시리즈',
    },
    {
      id: 3,
      path: 'about',
      title: '소개',
    },
  ];
  const { user } = useSelector(state => state.myLologData);

  return (
    <NavContainer>
      <div className='nav'>
        {myNav.map(nav => {
          return (
            <MyNavBar key={nav.id} to={nav.path} end={nav.id === 1} className={({ isActive }) => (isActive ? 'active' : '')}>
              {nav.title}
            </MyNavBar>
          );
        })}
        <SlideBorder location={location} userId={user.id} />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 4.5rem;
  margin-bottom: 4.5rem;

  .nav {
    display: flex;
    position: relative;
  }
`;
const MyNavBar = styled(NavLink)`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 8rem;
  height: 3rem;

  border: 1px solid transparent;
  color: var(--text2);
  text-decoration: none;
  transition: color 0.25s ease-in-out 0s;
  font-weight: 600;
  font-size: 1.325rem;

  :hover {
    color: var(--text1);
  }

  &.active {
    color: var(--primary2);
  }
`;
const SlideBorder = styled.div`
  position: absolute;
  bottom: -2px;
  left: ${({ location, userId }) => {
    if (location.pathname === `/${userId}`) return '0';
    else if (location.pathname === `/${userId}/series`) return '33.3333%';
    else if (location.pathname === `/${userId}/about`) return '66.6666%';
  }};
  width: 8rem;
  height: 2px;
  background: var(--primary2);
  transition: left 0.25s ease-in-out 0s;
`;
export default NavBar;
