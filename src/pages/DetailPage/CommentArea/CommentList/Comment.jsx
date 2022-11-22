import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserProfileImage from '../../../../components/UserProfileImage';
import GetPostDate from '../../../../components/GetPostDate';
const Comment = ({ comment }) => {
  const { comment_profile_image, content, create_at, comment_login_id, nested_comments, comments_is_writer } = comment;

  return (
    <CommentContainer>
      <div className='profile-box'>
        <Link to='' className='profile-img'>
          <UserProfileImage source={comment_profile_image} />
        </Link>
        <div className='profile-info'>
          <Link to='' className='user-id'>
            {comment_login_id}
          </Link>
          <div className='create-at'>
            <GetPostDate postDate={create_at} />
          </div>
        </div>
      </div>
      <p className='text'>{content}</p>
      <div className='nested-comments'></div>
    </CommentContainer>
  );
};

const CommentContainer = styled.div`
  padding: 1.5rem 0;
  border: 1px solid red;

  .profile-box {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;

    .profile-img {
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
      }

      .create-at {
        margin-top: 0.5rem;
        color: var(--text3);
        font-size: 0.875rem;
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

export default Comment;
