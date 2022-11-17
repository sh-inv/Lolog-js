import User from './User';
import Social from './Social';
import styled from 'styled-components';

const UserBox = () => {
  return (
    <UserBoxContainer>
      <User />
      <Social />
    </UserBoxContainer>
  );
};

const UserBoxContainer = styled.div`
  margin-top: 5.625rem;
`;

export default UserBox;
