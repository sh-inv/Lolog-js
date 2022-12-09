import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Post from './Post';

const PostList = () => {
  const { seriesPostList } = useSelector(state => state.seriesPostList);

  return (
    <PostListContainer>
      {seriesPostList.map(post => {
        return <Post key={post.sort} id={post.sort} title={post.title} src={post.thumbnail} contents={post.content} date={post.create_at} className='post' />;
      })}
    </PostListContainer>
  );
};

const PostListContainer = styled.div`
  margin-top: 4rem;

  .post + .post {
    margin-top: 4rem;

    @media screen and (max-width: 768px) {
      margin-top: 6rem;
    }
  }
`;

export default PostList;
