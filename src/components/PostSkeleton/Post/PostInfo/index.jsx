import styled from 'styled-components';

const PostInfo = () => {
  return (
    <PostInfoContainer>
      <div className='post-title' />
      <div className='post-title' />
    </PostInfoContainer>
  );
};

const PostInfoContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  padding: 1rem;

  .post-title {
    margin-bottom: 1rem;
    width: 100%;
    height: 1rem;
    border-radius: 4px;
    background: #2a2a2a;

    :nth-last-child(1) {
      margin-bottom: 0;
    }
  }
`;

export default PostInfo;
