import { useEffect } from 'react';
import styled from 'styled-components';
import EditButton from '../../components/EditButton';

const PostList = () => {
  useEffect(() => {}, []);

  return (
    <PostListContainer>
      <label>시리즈</label>
      <h1>TIL</h1>
      <div className='border' />
      <div className='edit-wrapper'>
        <EditButton text='수정' />
        <EditButton text='삭제' />
      </div>
    </PostListContainer>
  );
};

const PostListContainer = styled.div`
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
    }

    button + button {
      margin-left: 0.5rem;
    }
  }
`;

export default PostList;
