import Title from './Title';
import Edit from './PostList/Edit';
import Sort from './PostList/Sort';
import PostList from './PostList';
import styled from 'styled-components';

const SeriesPostList = () => {
  return (
    <SeriesPostListContainer>
      <label>시리즈</label>
      <Title />
      <div className='border' />
      <Edit />
      <Sort />
      <PostList />
    </SeriesPostListContainer>
  );
};

const SeriesPostListContainer = styled.div`
  width: 768px;
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;

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
