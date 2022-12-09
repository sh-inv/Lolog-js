import styled from 'styled-components';
import Information from './Information';
import Series from './Series';
import Snbs from './Snbs';
import Tags from './Tags';

const PostHeader = ({ postData, seriesData }) => {
  return (
    <PostHeaderContainer>
      <h1>{postData.title}</h1>
      <Information userId={postData.login_id} createAt={postData.create_at} />
      <Tags tags={postData.tags} />
      <Snbs postId={postData.post_id} />
      {seriesData && <Series postId={postData.post_id} seriesData={seriesData} />}
    </PostHeaderContainer>
  );
};

const PostHeaderContainer = styled.div`
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    letter-spacing: -0.004em;
    margin-top: 0px;
    font-weight: 800;
    color: var(--text1);
    margin-bottom: 2rem;
    word-break: keep-all;
    transition: color 0.125s ease-in 0s;
  }
`;

export default PostHeader;
