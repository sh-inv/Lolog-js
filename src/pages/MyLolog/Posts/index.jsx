import styled from 'styled-components';
import MaxWidth1199pxTagList from './MaxWidth1199pxTagList';
import MinWidth1200pxTagList from './MinWidth1200pxTagList';
import Post from './Post';
import NoPost from './NoPost';

const Posts = () => {
  const arr = [1, 2, 3, 4, 5, 6, 67, 7, 8, 8, 67, 5, 3, 4, 6, 7];
  return (
    <PostsContainer>
      <MinWidth1200pxTagList />
      <MaxWidth1199pxTagList />
      <div className='post-padding'>
        {arr.map((_, i) => (
          <Post key={i} />
        ))}
      </div>
      <NoPost />
    </PostsContainer>
  );
};

const PostsContainer = styled.div`
  position: relative;

  .post-padding {
    @media screen and (max-width: 768px) {
      padding: 0 1rem;
    }
  }
`;

export default Posts;
