import styled from 'styled-components';
import PostNavBtn from '../../../components/PostNavBtn';

const NextPrePost = ({ postData }) => {
  return (
    <NextPrePostContainer>
      <PostNavBtn postData={postData.pre_post} isLeft={true} />
      {postData.next_post.length ? <PostNavBtn postData={postData.next_post} /> : <></>}
    </NextPrePostContainer>
  );
};

const NextPrePostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default NextPrePost;
