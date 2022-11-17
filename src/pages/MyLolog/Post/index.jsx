import styled from 'styled-components';
import NoPost from './NoPost';
import TagList from './TagList';

const Post = () => {
  return (
    <PostContainer>
      <TagList />
      <NoPost />
    </PostContainer>
  );
};

const PostContainer = styled.div`
  position: relative;
`;

export default Post;
