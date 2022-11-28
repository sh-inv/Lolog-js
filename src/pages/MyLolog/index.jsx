import UserBox from '../../components/UserBox';
import NavBar from './NavBar';
import SearchBox from '../../components/SearchBox';
import { Outlet } from 'react-router-dom';
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
    margin-left: auto;
    margin-bottom: 2rem;
    padding: 0.5rem;
    width: 12rem;
    height: 2.25rem;
    .search-box-icon {
      margin-right: 0.5rem;
      width: 17px;
    }
    .search-box-input {
      line-height: 1rem;
      font-size: 0.875rem;
    }
  }
  @media screen and (max-width: 1024px) {
    .search-box-container {
      display: none;
    }
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 0;
  }
`;

export default MyLolog;
