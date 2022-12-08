import { Link } from 'react-router-dom';
import PostInfo from './PostInfo';
import UserInfo from './UserInfo';
import styled from 'styled-components';
import { postMaxWidth1056px, postMaxWidth767px } from '../../../styles/media';
import Thumbnail from '../../Thumbnail';

const Post = ({ postData }) => {
  const { post_id, post_thumbnail } = postData;

  return (
    <PostBox>
      <Link to={`/posts/${post_id}`} className='thumbnail-box'>
        <Thumbnail src={post_thumbnail} />
      </Link>
      <PostInfo postData={postData} />
      <UserInfo postData={postData} />
    </PostBox>
  );
};

const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 1rem;
  border-radius: 4px;
  background: var(--bg-element1);
  box-shadow: rgb(0 0 0 / 4%) 0 4px 16px 0;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  overflow: hidden;

  // 반응형
  ${postMaxWidth1056px}
  ${postMaxWidth767px}
  
  &:hover {
    transform: translate(0, -8px);
  }

  .thumbnail-box {
    position: relative;
    height: 167px;
    .post-thumbnail-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default Post;
