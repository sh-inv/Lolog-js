import Information from './Information';
import Authority from './Authority';
import Series from './Series';
import Snbs from './Snbs';
import Tags from './Tags';
import styled from 'styled-components';

const PostHeader = ({ postData, seriesData }) => {
  return (
    <PostHeaderContainer>
      <h1>{postData.title}</h1>
      {postData.is_writer ? <Authority postId={postData.post_id} status={postData.status} userId={postData.login_id} /> : null}
      <Information userId={postData.login_id} createAt={postData.create_at} />
      <Tags tags={postData.tags} />
      <Snbs />
      {seriesData && <Series postId={postData.post_id} seriesData={seriesData} />}
    </PostHeaderContainer>
  );
};

const PostHeaderContainer = styled.div`
  h1 {
    margin-top: 0px;
    margin-bottom: 2rem;
    line-height: 1.5;
    letter-spacing: -0.004em;
    color: var(--text1);
    font-size: 3rem;
    font-weight: 800;
    word-break: keep-all;
    transition: color 0.125s ease-in 0s;
  }
`;

export default PostHeader;
