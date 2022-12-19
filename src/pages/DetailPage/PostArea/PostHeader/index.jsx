import { useSelector } from 'react-redux';
import Information from './Information';
import Authority from './Authority';
import Series from './Series';
import Snbs from './Snbs';
import Tags from './Tags';
import styled from 'styled-components';

const PostHeader = () => {
  const { postData } = useSelector(state => state.detailData);

  return (
    <PostHeaderContainer>
      <h1 className='post-header-title'>{postData.post.title}</h1>
      {postData.post.is_writer ? <Authority /> : null}
      <Information />
      <Tags />
      <Snbs />
      {postData.series && <Series />}
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
