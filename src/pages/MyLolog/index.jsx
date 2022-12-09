import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import UserBox from '../../components/UserBox';
import NavBar from './NavBar';
import SearchBox from '../../components/SearchBox';
import styled from 'styled-components';
import { apiClient } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { setMyLologData } from '../../store/modules/mainpostlist';

const MyLolog = () => {
  const location = useLocation();
  const [userInfo, setUserInfo] = useState();
  const dispatch = useDispatch();
  // const { myLologData } = useSelector(state => state);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiClient.get(`/lolog${location.pathname}?offset=1&limit=1&tag_id=`);
        dispatch(setMyLologData(data));
        setUserInfo(data.user);
      } catch (error) {
        console.log('메인페이지 게시글 통신 오류 => ', error);
      }
    })();
  }, []);

  return (
    <MyLologContainer>
      <UserBox userInfo={userInfo} />
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
