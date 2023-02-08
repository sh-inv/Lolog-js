import { useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Post from './Post';
import PostListNavBar from '../PostListNavBar';
import PostSkeleton from '../PostSkeleton';
import { maxWidth1056px, maxWidth1440px, maxWidth1920px, minWidth250px } from '../../styles/media';
import useAxios from '../../hooks/useAxios';
import { plusPageNum } from '../../store/modules/mainnavbar';

const PostList = () => {
  const dispatch = useDispatch();
  const { name, query, pageNum } = useSelector(state => state.mainNavBar);
  const loader = useRef(null);
  const { postData, noMorePosts } = useAxios(query, pageNum, name);

  const intersectionObserver = useCallback(entries => {
    const target = entries[0];
    if (target.isIntersecting) {
      dispatch(plusPageNum());
    }
    return;
  }, []);

  const option = {
    threshold: 1,
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
    <PostListContainer>
      <PostListNavBar />
      <div className='post-list-out-box'>
        <div className='post-list-inner-box'>
          {postData.map((data, i) => {
            return <Post key={i} postData={data} />;
          })}
          {noMorePosts && postData.length ? <div ref={loader} /> : null}
          {noMorePosts && <PostSkeleton />}
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
  .asasdasdasd {
    width: 100%;
    height: 300px;
    background: #fff;
  }

  ${maxWidth1920px}
  ${maxWidth1440px}
  ${maxWidth1056px}
  ${minWidth250px}
`;

export default PostList;
