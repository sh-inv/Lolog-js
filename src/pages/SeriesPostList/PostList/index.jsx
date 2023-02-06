import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Post from './Post';

const PostList = () => {
  const { seriesPostList } = useSelector(state => state.seriesPostList);
  console.log(seriesPostList);

  return (
    <PostListContainer>
      {seriesPostList.map((post, index) => {
        return <Post key={post.sort} postId={post.post_id} id={index + 1} title={post.title} src={post.thumbnail} contents={post.description} date={post.create_at} className='post' />;
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
