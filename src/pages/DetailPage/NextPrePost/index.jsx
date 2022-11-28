import styled from 'styled-components';
import PostNavBtn from '../../../components/PostNavBtn';

const NextPrePost = ({ postData }) => {
  return (
    <NextPrePostContainer>
      <PostNavBtn postData={postData.pre_post} isLeft={true} />
      <PostNavBtn postData={postData.next_post} />
    </NextPrePostContainer>
  );
};

const NextPrePostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

export default NextPrePost;
