import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import styled from 'styled-components';
import { border4, text2 } from '../../../../styles/color';

const UserInfo = () => {
  return (
    <UserInfoContainer>
      <Link to='' className='user'>
        <img className='profile-img' src='https://velog.velcdn.com/images/saint6839/profile/b070ce76-2a5a-4ebb-958f-ac4fdf8db267/image.png' alt='' />
        <span className='user-by'>
          by <span className='user-name'>sh.inv</span>
        </span>
      </Link>
      <div className='likes'>
        <AiFillHeart className='heart' />
        <span className='like-count'>0</span>
      </div>
    </UserInfoContainer>
  );
};

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.625rem 1rem;
  border-top: 1px solid var(--post-border-top);
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
      color: ${text2};

      .user-name {
        color: var(--text);
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
