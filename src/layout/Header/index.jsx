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
          <div className='theme-mode icon'>
            <HiMoon />
            {/* <BsFillSunFill /> */}
          </div>
          <a className='search icon' href='/'>
            <BiSearch />
          </a>
          <div className='new-post' herf='/'>
            <a href='/'>새 글 작성</a>
          </div>
          <div className='profile icon'>
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

  a:visited {
    color: ${darkModeFontColor};
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  :visited {
    color: ${darkModeFontColor};
  }
`;

const RightIcons = styled.div`
  display: flex;
  align-items: center;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-left: 0.3rem;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .new-post {
    a {
      padding: 0.3rem 1rem;
      margin-left: 0.3rem;
      border: 1px solid ${darkModeFontColor};
      border-radius: 1rem;
      font-size: 1rem;
    }
  }

  .toggle-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 10px;
    }
  }
`;
