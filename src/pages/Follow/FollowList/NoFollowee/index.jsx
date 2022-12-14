import styled from 'styled-components';

const NoFollowee = () => {
  return <NoFolloweeContainer>팔로우한 블로그가 없습니다.</NoFolloweeContainer>;
};

const NoFolloweeContainer = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  text-align: center;
  font-size: 1.5rem;
  color: var(--text3);
`;

export default NoFollowee;
