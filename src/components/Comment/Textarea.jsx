import styled from 'styled-components';
import { apiClient } from '../../api';
import { toast } from 'react-toastify';
import Toastify from '../Toastify';
import { useRef } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNewCommentsData } from '../../store/modules/detailPage';

const Textarea = ({ setIsModify, isModify, content, postId, commentId, isNested }) => {
  const [disable, setDisable] = useState(true);
  const textareaRef = useRef();
  const dispatch = useDispatch();
  const cancelHandler = () => {
    setIsModify(false);
  };

  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MywibG9naW5faWQiOiJ0ZXN0VXNlciIsIm5hbWUiOiJFZGVuIn0sImlhdCI6MTY2OTc4NDY0N30.IQWbyxgj3UjAx8D8hMcQpAdf4uIu2XvkT7RrJ3e6fSY`,
  };

  const nestedComments = async () => {
    try {
      const { data } = await apiClient.post(
        `/comments/${postId}`,
        {
          content: textareaRef.current.value,
          parent_id: commentId,
        },
        { headers: headers }
      );
      dispatch(setNewCommentsData(data.comments));
      textareaRef.current.value = '';
      console.log(data);
    } catch (error) {
      console.log('댓글 통신 에러', error);
      (() => toast.error('댓글 통신 에러'))();
    }
  };

  const modifyComments = async () => {
    try {
      const { data } = await apiClient.post(
        {}`/comments/${postId}/${isModify && commentId}`,
        {
          content: 'klsdjfghksjdfhgjklshdfkghsjklrd',
          parent_id: isNested && commentId,
        },
        { headers: headers }
      );
      console.log(data);
    } catch (error) {
      console.log('댓글 통신 에러', error);
      (() => toast.error('댓글 통신 에러'))();
    }
  };

  const Comments = async () => {
    try {
      const { data } = await apiClient.post(
        {}`/comments/${postId}/${isModify && commentId}`,
        {
          content: 'klsdjfghksjdfhgjklshdfkghsjklrd',
          parent_id: isNested && commentId,
        },
        { headers: headers }
      );
      console.log(data);
    } catch (error) {
      console.log('댓글 통신 에러', error);
      (() => toast.error('댓글 통신 에러'))();
    }
  };

  return (
    <TextareaContainer>
      <Toastify />
      <textarea
        ref={textareaRef}
        className='textarea'
        rows={1}
        placeholder='댓글을 작성하세요'
        defaultValue={content}
        onChange={e => {
          e.target.style.height = e.target.scrollHeight + 'px';
          if (textareaRef.current.value) {
            setDisable(false);
          } else {
            setDisable(true);
          }
        }}
      />
      <div className='buttons-wrapper'>
        {isModify && (
          <button className='btn cancle' onClick={cancelHandler}>
            취소
          </button>
        )}
        <button className='btn upload' onClick={nestedComments} disabled={disable}>
          댓글 {isModify ? '수정' : '작성'}
        </button>
      </div>
    </TextareaContainer>
  );
};

const TextareaContainer = styled.div`
  .textarea {
    resize: none;
    width: 100%;
    min-height: 6.125rem;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border: 1px solid var(--border4);
    border-radius: 4px;
    outline: none;
    background: var(--bg-element1);
    font-size: 1rem;
    line-height: 1.75;
    color: var(--text1);
    overflow: hidden;
  }

  .buttons-wrapper {
    display: flex;
    align-items: center;
    justify-content: end;

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      cursor: pointer;
      outline: none;
      border: none;
      border-radius: 4px;
      padding: 0 1.25rem;
      height: 2rem;
      font-size: 1rem;
    }

    .cancle {
      background: none;
      color: var(--primary1);

      &:hover {
        background: #ffffff1a;
      }
    }

    .upload {
      margin-left: 0.5rem;
      background: var(--primary1);
      color: var(--button-text);

      &:hover {
        background: var(--primary2);
      }
    }
  }
`;

export default Textarea;
