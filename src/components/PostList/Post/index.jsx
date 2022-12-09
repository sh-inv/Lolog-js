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
        <div className='thumbnail-cover'>
          <Thumbnail src={post_thumbnail} />
        </div>
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
    display: block;
    color: inherit;
    .thumbnail-cover {
      position: relative;
      width: 100%;
      padding-top: 52.1921%;
    }
  }
`;

export default Post;
