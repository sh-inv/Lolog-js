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
        userId: postData.post.user_id,
        loginId: postData.post.login_id,
        userName: postData.post.name,
        profileImg: postData.post.profileImg,
        aboutMe: postData.post.about_me,
      });
    }
  }, [postData]);

  return (
    postData && (
      <PostAreaContainer>
        <PostHeader postData={postData.post} seriesData={postData.series} />
        <Content postContent={postData.content} />
        <UserBox className='post-area-user-info' userInfo={userInfo} />
      </PostAreaContainer>
    )
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
