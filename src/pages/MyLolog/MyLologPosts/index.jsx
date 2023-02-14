import { useEffect, useState, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { apiClient } from '../../../api';
import MaxWidth1199pxTagList from './MaxWidth1199pxTagList';
import MinWidth1200pxTagList from './MinWidth1200pxTagList';
import SearchBox from '../../../components/SearchBox';
import MyLologPost from './MyLologPost';
import MyLololgNoPost from './MyLololgNoPost';
import styled from 'styled-components';

const MyLologPosts = () => {
  const [postsData, setPostsData] = useState([]);
  const [tagData, setTagData] = useState([]);
  const [isNoPost, setIsNoPost] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const getTag = params.get('tag');

  const getPostData = async () => {
    try {
      const { data } = await apiClient.get(`/lolog${location.pathname}?offset=${pageNum}&limit=5&tag_id=${getTag ? getTag : 0}`);
      if (data.posts === null) {
        setIsNoPost(true);
        setTagData(data.tags);
      } else if (data.posts.length) {
        setNoMorePosts(true);
        setIsNoPost(false);
        setPostsData(prev => [...prev, ...data.posts]);
        setTagData(data.tags);
      } else if (data.posts.length === 0) {
        setNoMorePosts(false);
      }
    } catch (error) {
      console.log('내 벨로그 글 데이터 통신 오류', error);
    }
  };

  useEffect(() => {
    getPostData();
  }, [location, pageNum, getTag]);

  // 무한 스크롤
  const loader = useRef(null);

  const intersectionObserver = useCallback(entries => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPageNum(prev => prev + 1);
    }
    return;
  }, []);

  const option = {
    threshold: 0.1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionObserver, option);
    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [intersectionObserver, noMorePosts]);

  return (
    <PostsContainer>
      {tagData && (
        <>
          <MinWidth1200pxTagList tagData={tagData} setPostsData={setPostsData} setPageNum={setPageNum} />
          <MaxWidth1199pxTagList tagData={tagData} setPostsData={setPostsData} setPageNum={setPageNum} />
        </>
      )}
      <SearchBox />
      {postsData && (
        <div className='post-padding'>
          {postsData.map((postData, i) => (
            <MyLologPost key={i} postData={postData} />
          ))}
          {noMorePosts && postsData.length > 0 && <div ref={loader} className='loader-area' />}
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

    .loader-area {
      height: 20rem;
    }
  }
`;

export default MyLologPosts;
