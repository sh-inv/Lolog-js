import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ToggleMenuList = ({ toggleMenuRef, toggleMenuList, setIsToggleOpen }) => {
  return (
    <ToggleMenuListContainer ref={toggleMenuRef}>
      {toggleMenuList.map(menu => {
        return (
          <Link key={menu.name} className='link-tag' to={menu.path} onClick={() => setIsToggleOpen(false)}>
            {menu.name}
          </Link>
        );
      })}
    </ToggleMenuListContainer>
  );
};

export default ToggleMenuList;

const ToggleMenuListContainer = styled.div`
  width: 12rem;
  margin-top: 0.3rem;
  margin-left: auto;
  background-color: var(--bg-element1);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;

  .link-tag {
    display: block;
    padding: 1.25rem;
    font-size: 0.9rem;
    cursor: pointer;

    :nth-child(2) {
      @media only screen and (min-width: 1024px) {
        display: none;
      }
    }

    :hover {
      color: var(--primary1);
      background-color: var(--bg-element2);
    }
  }
`;
