import Post from './Post';
import PostListNavBar from '../PostListNavBar';
import styled from 'styled-components';
import { postListMaxWidth1056px, postListMaxWidth1440px, postListMaxWidth1920px } from '../../styles/media';
import { useRef, useState, useEffect } from 'react';

const PostList = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [bottom, setBottom] = useState(null);
  const bottomObserver = useRef(null);
  const totalElement = arr.length;
  const limit = 10;
  const [page, setPage] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          if (totalElement < limit * (page - 1)) {
            return;
          }
          setPage(page + 1);
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );
    bottomObserver.current = observer;
  }, []);

  useEffect(() => {
    const observer = bottomObserver.current;
    if (bottom) {
      observer.observe(bottom);
    }
    return () => {
      if (bottom) {
        observer.unobserve(bottom);
      }
    };
  }, [bottom]);

  return (
    <PostListContainer>
      <PostListNavBar />
      <div className='post-list-out-box'>
        <div className='post-list-inner-box'>
          {arr.slice(0, limit * page).map((el, i) => {
            return <Post key={i} />;
          })}
          <div ref={bottomObserver} />
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

  ${postListMaxWidth1920px}
  ${postListMaxWidth1440px}
  ${postListMaxWidth1056px}
`;

export default PostList;
