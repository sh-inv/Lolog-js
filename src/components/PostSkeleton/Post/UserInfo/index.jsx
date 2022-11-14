import styled from 'styled-components';

const UserInfo = () => {
  return (
    <UserInfoContainer>
      <div className='profile-img' />
      <span className='user-by' />
    </UserInfoContainer>
  );
};

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.625rem 1rem;
  border-top: 1px solid var(--post-border-top);
  line-height: 1.5;

  .profile-img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
    background: #2a2a2a;
  }

  .user-by {
    width: 6rem;
    height: 1rem;
    border-radius: 4px;
    background: #2a2a2a;
  }
`;

export default UserInfo;
