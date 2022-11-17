import PostInfo from './PostInfo';
import UserInfo from './UserInfo';
import styled from 'styled-components';
import { postMaxWidth1056px, postMaxWidth767px } from '../../../styles/media';
import Thumbnail from './Thumbnail';

const Post = () => {
  return (
    <PostBox>
      <div className='thumbnail-box'>
        <Thumbnail />
      </div>
      <PostInfo />
      <UserInfo />
    </PostBox>
  );
};

const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 1rem;
  border-radius: 4px;
  background: var(--bg-element2);
  box-shadow: rgb(0 0 0 / 4%) 0 4px 16px 0;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  overflow: hidden;

  // 반응형
  ${postMaxWidth1056px}
  ${postMaxWidth767px}

  .thumbnail-box {
    height: 167px;
  }
`;

export default Post;
