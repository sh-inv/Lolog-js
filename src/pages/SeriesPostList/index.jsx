import { useState } from 'react';
import Title from './Title';
import Edit from './Edit';
import Sort from './Sort';
import EditPostList from './EditPostList';
import PostList from './PostList';
import styled from 'styled-components';

const SeriesPostList = () => {
  const [isModify, setIsModify] = useState(false);

  return (
    <SeriesPostListContainer>
      <label>시리즈</label>
      <Title />
      <div className='border' />
      <Edit isModify={isModify} setIsModify={setIsModify} />
      {isModify ? (
        <EditPostList />
      ) : (
        <>
          <Sort /> <PostList />
        </>
      )}
    </SeriesPostListContainer>
  );
};

const SeriesPostListContainer = styled.div`
  width: 768px;
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    margin-top: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  label {
    display: inline-flex;
    border-bottom: 4px solid var(--primary2);
    font-size: 1.125rem;
    font-weight: bold;
    color: var(--primary2);
    line-height: 1.5;
  }

  .border {
    width: 100%;
    height: 1px;
    margin-bottom: 1.5rem;
    background: var(--bg-element4);
  }
`;

export default SeriesPostList;
