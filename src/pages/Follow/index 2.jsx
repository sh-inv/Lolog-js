import styled from 'styled-components';
import FollowList from './FollowList';

const Follow = () => {
  return (
    <FollowContainer>
      <h1 className='title'>팔로우 목록</h1>
      <FollowList />
    </FollowContainer>
  );
};

const FollowContainer = styled.div`
  width: 768px;
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    width: 100%;
  }

  .title {
    margin-top: 0px;
    margin-bottom: 3rem;
    line-height: 1.5;
    font-size: 3rem;

    @media screen and (max-width: 768px) {
      margin-bottom: 1.5rem;
      font-size: 2.5rem;
    }
  }
`;

export default Follow;
