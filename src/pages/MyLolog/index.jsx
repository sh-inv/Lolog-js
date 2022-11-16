import { Outlet } from 'react-router-dom';
import UserBox from '../../components/UserBox';
import MyLogNav from '../../components/MyLogNavBar';
import styled from 'styled-components';

const MyLolog = () => {
  return (
    <MyLologContainer>
      <UserBox />
      <MyLogNav />
      <Outlet />
    </MyLologContainer>
  );
};

const MyLologContainer = styled.div`
  width: 768px;
  margin-left: auto;
  margin-right: auto;
`;

export default MyLolog;
