import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { apiClient } from '../../api';
import { setDetailCommentsData, setDetailCommentsLengthData } from '../../store/modules/detailpage';
import ConfirmModal from '../ConfirmModal';
import GetPostDate from '../GetPostDate';
import Toastify from '../Toastify';
import UserProfileImage from '../UserProfileImage';
import Textarea from './Textarea';

const CommentContent = ({ isNested, commentData }) => {
  const { comment_profile_image, user_id, create_at, is_comments_writer, content, comment_login_id, comment_id, post_id } = commentData;
  const [isModify, setIsModify] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const onClose = () => setIsDelete(false);
  const dispatch = useDispatch();

  const deleteCommentHandler = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      const { data } = await apiClient.delete(`/comments/${post_id}/${comment_id}`, config);
      dispatch(setDetailCommentsData(data.comments));
      dispatch(setDetailCommentsLengthData(data.comment_count));
      toast.success('댓글 삭제 성공');
    } catch (error) {
      toast.error('댓글 삭제 실패');
    }
    setIsDelete(false);
  };

  return (
    <CommentContainer isNested={isNested}>
      <Toastify />
      <div className='profile-box'>
        <div className='profile'>
          <Link to={`/${user_id}`} className='profile-img'>
            <UserProfileImage source={comment_profile_image} />
          </Link>
          <div className='profile-info'>
            <Link to={`/${user_id}`} className='user-id'>
              {comment_login_id}
            </Link>
            <div className='create-at'>
              <GetPostDate postDate={create_at} />
            </div>
          </div>
        </div>
        {is_comments_writer && !isModify ? (
          <div className='actions'>
            <span
              onClick={() => {
                setIsModify(true);
              }}
            >
              수정
            </span>
            <span
              onClick={() => {
                setIsDelete(true);
              }}
            >
              삭제
            </span>
          </div>
        ) : (
          <></>
        )}
      </div>
      {isModify ? (
        <>
          <Textarea setIsModify={setIsModify} isModify={true} content={content} postId={post_id} commentId={comment_id} />
          <div style={{ height: '1.5rem' }} />
        </>
      ) : (
        <pre className='text'>{content}</pre>
      )}
      {isDelete && <ConfirmModal title='댓글 삭제' message='댓글을 삭제하시겠습니까?' onClose={onClose} onMove={deleteCommentHandler} />}
    </CommentContainer>
  );
};

const CommentContainer = styled.div`
  ${({ isNested }) => isNested && 'padding-top: 1.5rem; border-bottom: 1px solid var(--border4);'}

  .profile-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    .profile {
      display: flex;
      align-items: center;

      .profile-img {
        display: inline-block;
        width: 3.375rem;
        height: 3.375rem;
      }

      .profile-info {
        margin-left: 1rem;
        line-height: 1;

        .user-id {
          font-size: 1rem;
          font-weight: bold;
          color: var(--text1);

          &:hover {
            text-decoration: underline;
          }
        }

        .create-at {
          margin-top: 0.5rem;
          color: var(--text3);
          font-size: 0.875rem;
        }
      }
    }

    .actions {
      font-size: 0.875rem;
      color: var(--text3);

      span {
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }

        :nth-last-child(1) {
          margin-left: 0.5rem;
        }
      }
    }
  }

  .text {
    display: block;
    margin: 1em 0;
    font-size: 1.125rem;
    color: var(--text1);
    line-height: 1.7;
    letter-spacing: -0.004em;
    word-break: keep-all;
    overflow-wrap: break-word;
  }

  @media screen and (max-width: 768px) {
    .profile-box {
      .profile {
        .profile-img {
          width: 2.5rem;
          height: 2.5rem;
        }

        .profile-info {
          margin-left: 0.5rem;
          .user-id {
            font-size: 0.875rem;
          }
          .create-at {
            font-size: 0.75rem;
          }
        }
      }

      .actions {
        font-size: 0.75rem;
      }
    }

    .text {
      font-size: 1rem;
    }
  }
`;

export default CommentContent;
