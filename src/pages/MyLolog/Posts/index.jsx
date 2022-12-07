import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MaxWidth1199pxTagList from './MaxWidth1199pxTagList';
import MinWidth1200pxTagList from './MinWidth1200pxTagList';
import Post from './Post';
import NoPost from './NoPost';
import { apiClient } from '../../../api';

const Posts = () => {
  const [postsData, setPostsData] = useState();
  const [tagId, setTagId] = useState('');
  const [isNoPost, setIsNoPost] = useState(false);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiClient.get(`/lolog/1?offset=1&limit=20&tag_id=${tagId}`);
        setPostsData(data);
        !data.posts && setIsNoPost(true);
      } catch (error) {
        console.log('내 벨로그 글 데이터 통신 오류', error);
        setIsNoPost(true);
      }
    })();
  }, []);
  console.log(postsData);

  return (
    <PostsContainer>
      <MinWidth1200pxTagList />
      <MaxWidth1199pxTagList />
      {postsData && <div className='post-padding'>{postsData && postsData.posts.map((postData, i) => <Post key={i} postData={postData} />)}</div>}
      {isNoPost && <NoPost />}
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
