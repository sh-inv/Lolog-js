import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MaxWidth1199pxTagList from './MaxWidth1199pxTagList';
import MinWidth1200pxTagList from './MinWidth1200pxTagList';
import MyLologPost from './MyLologPost';
import MyLololgNoPost from './MyLololgNoPost';
import { apiClient } from '../../../api';

const MyLologPosts = () => {
  const location = useLocation();
  const [postsData, setPostsData] = useState();
  const [tagData, setTagData] = useState();
  const [tagId, setTagId] = useState(0);
  const [isNoPost, setIsNoPost] = useState(false);
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiClient.get(`/lolog${location.pathname}?offset=1&limit=5&tag_id=${tagId}`);
        setPostsData(data.posts);
        setTagData(data.tags);
        !data.posts && setIsNoPost(true);
      } catch (error) {
        console.log('내 벨로그 글 데이터 통신 오류', error);
        setIsNoPost(true);
      }
    })();
  }, [tagId]);

  // 무한 스크롤

  const observerRef = useRef(null);
  const [bottom, setBottom] = useState(null);
  const [noMorePosts, setNoMorePosts] = useState(false);

  const intersectionObserver = entries => {
    if (entries[0].isIntersecting) {
      setOffset(offset => offset + 1);
      (async () => {
        try {
          const { data } = await apiClient.get(`/lolog${location.pathname}?offset=${offset}&limit=5&tag_id=${tagId}`);
          if (!data.posts) setNoMorePosts(true);
          else setPostsData([...postsData, ...data.posts]);
        } catch (error) {
          console.log('내 벨로그 글 데이터 통신 오류', error);
        }
      })();
    }
  };

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '500px',
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver, observerOptions);
    const observer = observerRef.current;
    if (bottom) {
      observer.observe(bottom);
      console.log('관찰시작');
    }
    return () => {
      if (bottom) observer.unobserve(bottom);
      console.log('관찰종료');
    };
  }, [bottom]);

  return (
    <PostsContainer>
      {tagData && (
        <>
          <MinWidth1200pxTagList tagData={tagData} setTagId={setTagId} />
          <MaxWidth1199pxTagList tagData={tagData} setTagId={setTagId} />
        </>
      )}
      {postsData && (
        <div className='post-padding'>
          {postsData.map((postData, i) => (
            <MyLologPost key={i} postData={postData} />
          ))}
          {!noMorePosts && <div ref={setBottom} className='asas' />}
        </div>
      )}
      {isNoPost && <MyLololgNoPost />}
    </PostsContainer>
  );
};

const PostsContainer = styled.div`
  position: relative;

  .post-padding {
    @media screen and (max-width: 768px) {
      padding: 0 1rem;
    }

    .asas {
      height: 500px;
    }
  }
`;

export default MyLologPosts;
