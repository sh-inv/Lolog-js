import styled from 'styled-components';
import { darkModeBackgroundColor, darkModeFontColor } from '../../styles/color';
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
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1728px;

  a:visited {
    color: ${darkModeFontColor};
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
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
    border-radius: 40px;

    :hover {
      background-color: rgba(255, 255, 255, 0.1);
      cursor: pointer;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .new-post {
    a {
      padding: 0.4rem 1rem;
      margin-left: 0.5rem;
      border: 1px solid ${darkModeFontColor};
      border-radius: 1.3rem;
      font-size: 1rem;
      font-weight: bold;
      transition: all 0.125s ease-in 0s;

      :hover {
        background-color: ${darkModeFontColor};
        color: ${darkModeBackgroundColor};
      }
    }
  }

  .profile {
    margin-left: 0.8rem;
    cursor: pointer;

    svg {
      width: 32px;
      height: 32px;
    }
  }

  .toggle-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
    transition: all 0.125s ease-in 0s;
    cursor: pointer;

    svg {
      width: 12px;
      color: #acacac;
    }

    :hover {
      svg {
        color: #ececec;
      }
    }
  }
`;
