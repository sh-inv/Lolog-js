import { Outlet } from 'react-router-dom';
import UserBox from '../../components/UserBox';
import NavBar from './NavBar';
import SearchBox from '../../components/SearchBox';
import styled from 'styled-components';

const MyLolog = () => {
  return (
    <MyLologContainer>
      <UserBox />
      <NavBar />
      <SearchBox />
      <Outlet />
    </MyLologContainer>
  );
};

const MyLologContainer = styled.div`
  width: 768px;
  margin: 0 auto;

  .search-box-container {
    font-size: 0.5rem;
    height: 2.25rem;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 0;
  }
`;

export default MyLolog;
