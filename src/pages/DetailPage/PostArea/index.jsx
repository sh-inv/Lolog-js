import styled from 'styled-components';
import Content from './Content';
import UserBox from '../../../components/UserBox';
import PostHeader from './PostHeader';

const PostArea = ({ postData }) => {
  console.log(postData);
  return (
    <PostAreaContainer>
      <PostHeader />
      <img className='post-area-thumbnail' src='' alt='thumbnail' />
      <Content />
      <UserBox className='post-area-user-info' />
    </PostAreaContainer>
  );
};

const PostAreaContainer = styled.div`
  margin-top: 5.5rem;

  .post-area-thumbnail {
    max-height: 100vh;
    max-width: 100%;
    width: auto;
    margin: 2rem auto 0px;
    height: auto;
    object-fit: contain;
    display: block;
  }

  .user-box-container {
    margin-top: 16rem;
    margin-bottom: 6rem;
    .user-container {
      .user {
        a {
          img {
            width: 8rem;
            height: 8rem;
          }
        }
      }
    }
  }
`;

export default PostArea;
