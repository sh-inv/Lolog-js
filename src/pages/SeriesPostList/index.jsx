import { useState } from 'react';
import { IoChevronUp, IoChevronDown } from 'react-icons/io5';
import Title from './Title';
import Edit from './PostList/Edit';
import EditButton from '../../components/EditButton';
import Sort from './PostList/Sort';
import PostList from './PostList';
import styled from 'styled-components';

const SeriesPostList = () => {
  const [isSort, setIsSort] = useState(true);

  const onSort = () => {
    setIsSort(!isSort);
  };

  return (
    <SeriesPostListContainer>
      <label>시리즈</label>
      <Title />
      <div className='border' />
      <Edit />
      <div className='fillter-wrapper'>
        <Sort icon={isSort ? <IoChevronUp /> : <IoChevronDown />} text={isSort ? '오름차순' : '내림차순'} onClick={onSort} />
      </div>
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

  .fillter-wrapper {
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    margin-top: 1rem;

    button {
      display: inline-flex;
      height: 2rem;
      padding-left: 0.5rem;
      padding-right: 0.75rem;
      -webkit-box-align: center;
      align-items: center;
      cursor: pointer;
      background: var(--bg-element2);
      border-radius: 4px;
      border: none;
      outline: none;
    }
  }
`;

export default SeriesPostList;
