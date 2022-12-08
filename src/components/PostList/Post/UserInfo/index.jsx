import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import styled from 'styled-components';

const UserInfo = ({ postData }) => {
  const { user_profile_image, user_login_id, post_likes } = postData;
  return (
    <UserInfoContainer>
      <Link to='' className='user'>
        <img className='profile-img' src={user_profile_image} alt='profile-img' />
        <span className='user-by'>
          by <span className='user-name'>{user_login_id}</span>
        </span>
      </Link>
      <div className='likes'>
        <AiFillHeart className='heart' />
        <span className='like-count'>{post_likes}</span>
      </div>
    </UserInfoContainer>
  );
};

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.625rem 1rem;
  border-top: 1px solid var(--border4);
  line-height: 1.5;
  font-size: 0.75rem;

  .user {
    display: flex;
    align-items: center;

    .profile-img {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 0.5rem;
    }

    .user-by {
      color: var(--text2);

      .user-name {
        color: var(--text1);
        font-weight: bold;
      }
    }
  }

  .likes {
    display: flex;
    align-items: center;

    .heart {
      margin-right: 0.5rem;
    }

    .like-count {
      margin-top: 2px;
    }
  }
`;

export default UserInfo;
