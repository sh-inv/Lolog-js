import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GetPostDate from '../GetPostDate';
import UserProfileImage from '../UserProfileImage';

const CommentContent = ({ isNested, profile_img, user_id, create_at, is_writer, content }) => {
  const [isModify, setIsModify] = useState(false);

  return (
    <CommentContainer isNested={isNested}>
      <div className='profile-box'>
        <div className='profile'>
          <Link to='' className='profile-img'>
            <UserProfileImage source={profile_img} />
          </Link>
          <div className='profile-info'>
            <Link to='' className='user-id'>
              {user_id}
            </Link>
            <div className='create-at'>
              <GetPostDate postDate={create_at} />
            </div>
          </div>
        </div>
        {is_writer === 'true' && !isModify && (
          <div className='actions'>
            <span
              onClick={() => {
                setIsModify(true);
              }}
            >
              수정
            </span>
            <span>삭제</span>
          </div>
        )}
      </div>
      {isModify ? <textarea></textarea> : <p className='text'>{content}</p>}
    </CommentContainer>
  );
};

const CommentContainer = styled.div`
  ${({ isNested }) => isNested && 'padding: 1.5rem 0; border-bottom: 1px solid var(--border4);'}

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
`;

export default CommentContent;
