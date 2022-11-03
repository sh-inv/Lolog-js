import { Link } from 'react-router-dom';
import PostInfo from './PostInfo';
import UserInfo from './UserInfo';
import styled from 'styled-components';
import { postMaxWidth1056px, postMaxWidth767px } from '../../../styles/media';

const Post = () => {
  return (
    <PostBox>
      <Link to='' className='thumbnail-box'>
        <img className='post-thumbnail-img' src='https://velog.velcdn.com/images/s2ksh77/post/442c7442-0de4-4730-a447-d8a40bf5d074/image.png' alt='' />
      </Link>
      <PostInfo />
      <UserInfo />
    </PostBox>
  );
};

const PostBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 1rem;
  border-radius: 4px;
  background: #1e1e1e;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  overflow: hidden;

  // 반응형
  ${postMaxWidth1056px}
  ${postMaxWidth767px}

  &:hover {
    transform: translate(0, -8px);
  }

  .thumbnail-box {
    height: 167px;
    .post-thumbnail-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default Post;
