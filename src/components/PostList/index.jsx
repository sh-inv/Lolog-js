import Post from './Post';
import PostListNavBar from '../PostListNavBar';
import styled from 'styled-components';
import { useRef, useState, useEffect } from 'react';
import { maxWidth1056px, maxWidth1440px, maxWidth1920px, minWidth250px } from '../../styles/media';
import axios from 'axios';

const PostList = () => {
  const [postData, setPostData] = useState([]);
  const observerRef = useRef(null);
  const [bottom, setBottom] = useState(null);

  const limit = 10;
  const [page, setPage] = useState(1);

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

  useEffect(getPostData, [page]);

  const intersectionObserver = entries => {
    if (entries[0].isIntersecting) {
      if (postData.length < limit * (page - 1)) {
        return;
      }
      setPage(page => page + 1);
      console.log('불러왔다.', page);
    }
  };

  const observerOptions = {
    threshold: 1,
    rootMargin: '50px',
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
          {postData.slice(0, limit * page).map((post, i) => {
            return <Post key={i} />;
          })}
          {postData.length && <div ref={setBottom} />}
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
