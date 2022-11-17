import styled from 'styled-components';
import MaxWidth1199pxTagList from './MaxWidth1199pxTagList';
import NoPost from './NoPost';
import TagList from './TagList';

const Post = () => {
  return (
    <PostContainer>
      <TagList />
      <MaxWidth1199pxTagList />
      <NoPost />
    </PostContainer>
  );
};

const PostContainer = styled.div`
  position: relative;
`;

export default Post;
