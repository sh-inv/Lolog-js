import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ConfirmModal from '../ConfirmModal/Index';
import GetPostDate from '../GetPostDate';
import UserProfileImage from '../UserProfileImage';
import Textarea from './Textarea';

const CommentContent = ({ isNested, commentData }) => {
  const { profile_img, user_id, create_at, is_comments_writer, content, comment_login_id } = commentData;
  const [isModify, setIsModify] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const onClose = () => setIsDelete(false);
  const deleteCommentHandler = () => {};

  return (
    <CommentContainer isNested={isNested}>
      <div className='profile-box'>
        <div className='profile'>
          <Link to={`/${comment_login_id}`} className='profile-img'>
            <UserProfileImage source={profile_img} />
          </Link>
          <div className='profile-info'>
            <Link to={`/${comment_login_id}`} className='user-id'>
              {user_id}
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
          <Textarea setIsModify={setIsModify} isModify={true} content={content} />
          <div style={{ height: '1.5rem' }} />
        </>
      ) : (
        <pre className='text'>{content}</pre>
      )}
      {isDelete && <ConfirmModal title='댓글 삭제' message='댓글을 삭제하시겠습니까?' onClose={onClose} />}
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
