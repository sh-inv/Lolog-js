import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Post from './Post';
import PostListNavBar from '../PostListNavBar';
import PostSkeleton from '../PostSkeleton';
import { maxWidth1056px, maxWidth1440px, maxWidth1920px, minWidth250px } from '../../styles/media';
import { apiClient } from '../../api';
import { useLocation } from 'react-router-dom';

const PostList = ({ pageInfo }) => {
  const location = useLocation();
  const [postData, setPostData] = useState([]);
  const [type, setType] = useState('');
  const [period, setPeriod] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const observerRef = useRef(null);
  const [bottom, setBottom] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiClient.get(`/main?type=${pageInfo}&period=${period}&offset=${pageNum}&limit=50`);
        setPostData([...postData, ...data.post]);
      } catch (error) {
        console.log('메인페이지 게시글 통신 오류 => ', error);
      }
    })();
  }, [pageInfo, period, pageNum]);

  console.log(postData);

  const intersectionObserver = entries => {
    if (entries[0].isIntersecting) {
      setPageNum(pageNum => pageNum + 1);
    }
  };

  const observerOptions = {
    threshold: 1,
    rootMargin: '50px',
  };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(intersectionObserver, observerOptions);
  //   observerRef.current = observer;
  // }, []);

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
    <PostListContainer>
      <PostListNavBar />
      <div className='post-list-out-box'>
        <div className='post-list-inner-box'>
          {postData.map((data, i) => {
            return <Post key={i} postData={data} />;
          })}
          {postData.length ? <div ref={setBottom} /> : null}
          <PostSkeleton />
        </div>
      </div>
    </PostListContainer>
  );
};

const PostListContainer = styled.div`
  width: 1728px;
  margin: 0 auto;
  .post-list-out-box {
    margin: 2rem auto 0 auto;
    .post-list-inner-box {
      display: flex;
      flex-wrap: wrap;
      margin: -1rem;
    }
  }

  ${maxWidth1920px}
  ${maxWidth1440px}
  ${maxWidth1056px}
  ${minWidth250px}
`;

export default PostList;
