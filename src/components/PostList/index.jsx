import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Post from './Post';
import PostListNavBar from '../PostListNavBar';
import PostSkeleton from '../PostSkeleton';
import { maxWidth1056px, maxWidth1440px, maxWidth1920px, minWidth250px } from '../../styles/media';

const PostList = () => {
  const [postData, setPostData] = useState([]);
  const observerRef = useRef(null);
  const [bottom, setBottom] = useState(null);
  const [pageNum, setPageNum] = useState(1);

  const getPostData = () => {
    try {
      (async () => {
        const {
          data: { data },
        } = await axios.get('data/postlist/data.json');
        setPostData([...postData, ...data]);
      })();
    } catch (error) {
      console.log('error => ', error);
    }
  };

  useEffect(getPostData, [pageNum]);

  const intersectionObserver = entries => {
    if (entries[0].isIntersecting) {
      setPageNum(pageNum => pageNum + 1);
    }
  };

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '500px',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionObserver, observerOptions);
    observerRef.current = observer;
  }, [postData]);

  useEffect(() => {
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
          {postData.map((_, i) => {
            return <Post key={i} />;
          })}
          <PostSkeleton />
        </div>
        {postData.length ? <div ref={setBottom} /> : null}
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
