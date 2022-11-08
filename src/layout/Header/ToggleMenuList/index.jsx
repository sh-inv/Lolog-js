import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const ToggleMenuList = ({ toggleMenuRef, setIsToggleOpen }) => {
  const [toggleMenuList, setToggleMenuList] = useState();

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
    <ToggleMenuListContainer ref={toggleMenuRef}>
      {toggleMenuList &&
        toggleMenuList.map(menu => {
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
  background-color: var(--toggle-background);
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
      color: var(--a-tag-hover-text);
      background-color: var(--a-tag-hover-background);
    }
  }
`;
