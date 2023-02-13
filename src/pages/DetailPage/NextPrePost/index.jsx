import styled from 'styled-components';
import PostNavBtn from '../../../components/PostNavBtn';

const NextPrePost = ({ postData }) => {
  const { pre_post, next_post } = postData;

  return (
    <NextPrePostContainer>
      {pre_post ? <PostNavBtn postData={pre_post} isLeft={true} /> : <div />}
      {next_post && <PostNavBtn postData={next_post} />}
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
