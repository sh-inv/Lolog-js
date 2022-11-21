import { useEffect } from 'react';
import { IoChevronUp, IoChevronDown } from 'react-icons/io5';
import EditButton from '../../components/EditButton';
import SortButton from '../../components/SortButton';
import PostList from './PostList';
import styled from 'styled-components';

const SeriesPostList = () => {
  useEffect(() => {}, []);

  return (
    <SeriesPostListContainer>
      <label>시리즈</label>
      <h1>TITLE</h1>
      <div className='border' />
      <div className='edit-wrapper'>
        <EditButton text='수정' />
        <EditButton text='삭제' />
      </div>
      <div className='fillter-wrapper'>
        <SortButton icon={<IoChevronDown />} text='오름차순' />
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

  h1 {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    color: var(--text1);
    letter-spacing: -0.004em;
    line-height: 1.5;
    font-size: 2.5rem;
    outline: none;
    overflow: hidden;
  }

  .border {
    width: 100%;
    height: 1px;
    margin-bottom: 1.5rem;
    background: var(--bg-element4);
  }

  .edit-wrapper {
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
    height: 2rem;

    button {
      color: var(--text3);
      text-decoration: none;

      &:hover {
        color: var(--text1);
      }
    }

    button + button {
      margin-left: 0.5rem;
    }
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

      span {
        margin-left: 0.25rem;
        font-size: 1rem;
        color: var(--text1);
        line-height: 1;
      }
    }
  }
`;

export default SeriesPostList;
