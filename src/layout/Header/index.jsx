import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toggle } from '../../styles/color';
import { BiSearch } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { VscTriangleDown } from 'react-icons/vsc';
import styled from 'styled-components';
import ToggleMenuList from './ToggleMenuList';
import ThemeMode from './ThemeMode';

const Header = () => {
  const myZoneRef = useRef();
  const toggleMenuRef = useRef();
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [toggleMenuList, setToggleMenuList] = useState();

  useEffect(() => {
    const closeToggleMenu = e => {
      if (isToggleOpen && !toggleMenuRef.current.contains(e.target) && !myZoneRef.current.contains(e.target)) {
        setIsToggleOpen(false);
      }
    };
    document.addEventListener('mousedown', closeToggleMenu);
    return () => {
      document.removeEventListener('mousedown', closeToggleMenu);
    };
  }, [isToggleOpen]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { toggle },
        } = await axios.get('data/header/toggle.json');
        setToggleMenuList(toggle);
      } catch (error) {
        console.log('error => ', error);
      }
    })();
  }, []);

  return (
    <Positioner>
      <Content>
        <Logo to='/'>velog</Logo>
        <RightIcons>
          <ThemeMode />
          <Link className='search setting-hover' to='/search'>
            <BiSearch />
          </Link>
          <div className='new-post'>
            <Link to='/write'>새 글 작성</Link>
          </div>
          <div className='my-zone' ref={myZoneRef} onClick={() => setIsToggleOpen(!isToggleOpen)}>
            <CgProfile className='profile' />
            <VscTriangleDown className='toggle' />
          </div>
        </RightIcons>
      </Content>
      {isToggleOpen && toggleMenuList && <ToggleMenuList toggleMenuRef={toggleMenuRef} toggleMenuList={toggleMenuList} setIsToggleOpen={setIsToggleOpen} />}
    </Positioner>
  );
};

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
  padding: 0 1rem;
  width: 1024px;
  max-width: 1728px;
  min-width: 250px;

  @media only screen and (max-width: 1023px) {
    width: 100%;
  }

  @media only screen and (min-width: 1440px) {
    width: 1376px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;

  @media only screen and (max-width: 1023px) {
    font-size: 1.25rem;
  }
`;

const RightIcons = styled.div`
  display: flex;
  align-items: center;

  .setting-hover {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-left: 0.3rem;
    border-radius: 40px;

    svg {
      width: 24px;
      height: 24px;
      pointer-events: none;
    }

    :hover {
      background-color: rgba(255, 255, 255, 0.1);
      cursor: pointer;
    }
  }

  .new-post {
    a {
      padding: 0.4rem 1rem;
      margin-left: 0.5rem;
      border: 1px solid var(--text);
      border-radius: 1.3rem;
      background-color: var(--new-post-btn-background);
      font-size: 1rem;
      font-weight: bold;

      :hover {
        background-color: var(--new-post-btn-hover-background);
        color: var(--new-post-btn-hover-text);
        transition: all 0.125s ease-in 0s;
      }
    }

    @media only screen and (max-width: 1023px) {
      display: none;
    }
  }

  .my-zone {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.8rem;

    .profile {
      width: 32px;
      height: 32px;
      cursor: pointer;
    }

    .toggle {
      margin-left: 0.5rem;
      transition: all 0.125s ease-in 0s;
      cursor: pointer;

      width: 12px;
      color: ${toggle};

      :hover {
        color: var(--toggle-hover);
      }
    }
  }
`;

export default Header;
