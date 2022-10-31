import styled from 'styled-components';
import { darkModeBackgroundColor, darkModeFontColor } from '../../styles';

const Header = () => {
  return (
    <Positioner>
      <Content>
        <Logo href='/'>velog</Logo>
        <RightIcons>
          <div className='theme-mode'>moon</div>
          <div className='search'>search</div>
          <div className='new-post'>search</div>
          <div className='profile'>profile</div>
          <div className='toggle-menu'>toggle</div>
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
