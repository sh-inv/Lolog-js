import styled from 'styled-components';
import { darkModeBackgroundColor, darkModeFontColor } from '../../styles';
import { HiMoon } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { BsFillSunFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { VscTriangleDown } from 'react-icons/vsc';

const Header = () => {
  return (
    <Positioner>
      <Content>
        <Logo href='/'>velog</Logo>
        <RightIcons>
          <div className='theme-mode'>
            <HiMoon />
            <BsFillSunFill />
          </div>
          <div className='search'>
            <BiSearch />
          </div>
          <div className='new-post'>new-post</div>
          <div className='profile'>
            <CgProfile />
          </div>
          <div className='toggle-menu'>
            <VscTriangleDown />
          </div>
        </RightIcons>
      </Content>
    </Positioner>
  );
};

export default Header;

const Positioner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background-color: ${darkModeBackgroundColor};
  color: ${darkModeFontColor};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  :visited {
    color: ${darkModeFontColor};
  }
`;

const RightIcons = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-left: 1.25rem;
  }
`;
