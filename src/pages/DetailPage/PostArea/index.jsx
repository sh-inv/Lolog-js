import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PostHeader from './PostHeader';
import Content from './Content';
import UserBox from '../../../components/UserBox';
import styled from 'styled-components';

const PostArea = () => {
  const { postData } = useSelector(state => state.detailData);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (postData) {
      setUserInfo({
        user_id: postData.post.user_id,
        login_id: postData.post.login_id,
        name: postData.post.name,
        profile_img: postData.post.profileImg,
        about_me: postData.post.about_me,
      });
    }
  }, [postData]);

  return (
    postData && (
      <PostAreaContainer className='post-area-container'>
        <PostHeader />
        <Content postContent={postData.post.content} />
        <UserBox className='post-area-user-info' userInfo={userInfo} />
      </PostAreaContainer>
    )
  );
};

const PostAreaContainer = styled.div`
  margin-top: 5.5rem;

  .post-area-thumbnail {
    display: block;
    margin: 2rem auto 0px;
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100vh;
    object-fit: contain;
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
