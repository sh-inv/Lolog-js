import styled from 'styled-components';
import { apiClient } from '../../api';
import { toast } from 'react-toastify';
import Toastify from '../Toastify';
import { useRef } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDetailCommentsData, setDetailCommentsLengthData } from '../../store/modules/detailpage';

const Textarea = ({ setIsModify, isModify, content, postId, commentId, isNested }) => {
  const [disable, setDisable] = useState(true);
  const textareaRef = useRef();
  const dispatch = useDispatch();
  const cancelHandler = () => {
    setIsModify(false);
  };

  const commentOnClickHandler = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    };

    if (isModify) {
      try {
        const { data } = await apiClient.patch(
          `/comments/${postId}/${commentId}`,
          {
            content: textareaRef.current.value,
          },
          config
        );
        dispatch(setDetailCommentsData(data.comments));
        toast.success('댓글 수정 성공');
      } catch (error) {
        toast.error('댓글 수정 실패');
      }
      setIsModify(false);
    } else {
      try {
        const { data } = await apiClient.post(
          `/comments/${postId}`,
          {
            content: textareaRef.current.value,
            parent_id: isNested && commentId,
          },
          config
        );
        dispatch(setDetailCommentsData(data.comments));
        dispatch(setDetailCommentsLengthData(data.comment_count));
        textareaRef.current.value = '';
        if (isNested) {
          toast.success('대댓글 작성 성공');
        } else {
          toast.success('댓글 작성 성공');
        }
      } catch (error) {
        toast.error('댓글 작성 실패');
      }
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
        <button className='btn upload' onClick={commentOnClickHandler} disabled={disable}>
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
