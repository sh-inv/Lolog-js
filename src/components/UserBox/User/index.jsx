import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { apiClient } from '../../../api';
import UserProfileImage from '../../UserProfileImage';
import FollowButton from '../../FollowButton';
import { setIsFollowed } from '../../../store/modules/mylologpostlist';

const User = ({ userInfo }) => {
  const { is_owner, is_follower } = userInfo;
  const dispatch = useDispatch();

  const onFollow = async () => {
    const body = {
      followee_id: userInfo.id,
    };
    try {
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
      };
      const { data } = await apiClient.post('users/follow', body, config);
      dispatch(setIsFollowed(data.is_follower));
    } catch (error) {
      console.log(error);
    }
  };

  const unFollow = async () => {
    const body = {
      followee_id: userInfo.id,
    };
    try {
      const { data } = await apiClient.delete('users/follow', { headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }, data: body });
      dispatch(setIsFollowed(data.is_follower));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <UserContainer>
        <div className='user'>
          <Link to={`/${userInfo.id}`}>
            <UserProfileImage source={userInfo.profile_image} />
          </Link>
          <div className='flex'>
            <div className='user-info'>
              <div className='user-name'>
                <Link to={`/${userInfo.id}`}>{userInfo.name}</Link>
              </div>
              <div className='description'>{userInfo.about_me}</div>
            </div>
          </div>
        </div>
        {is_owner === 0 || (localStorage.getItem('authToken') && <FollowButton isFollower={is_follower} onClick={is_follower ? unFollow : onFollow} checked={is_follower === '1'} />)}
      </UserContainer>
      <Border />
    </>
  );
};

const UserContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-between;

  .user {
    display: flex;
    -webkit-box-align: center;
    align-items: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }

    img {
      width: 8rem;
      height: 8rem;
      margin-bottom: 0;
      box-shadow: rgb(0 0 0 / 6%) 0px 0px 4px 0px;

      @media screen and (max-width: 768px) {
        width: 5rem;
        height: 5rem;
      }
    }

    .user-info {
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      margin-left: 1rem;

      @media screen and (max-width: 768px) {
        margin-left: 0px;
        margin-top: 1rem;
      }

      .user-name {
        font-size: 1.5rem;
        line-height: 1.5;
        font-weight: bold;
        color: var(--text1);

        @media screen and (max-width: 768px) {
          font-size: 1.125rem;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      }

      .description {
        white-space: pre-wrap;
        font-size: 1.125rem;
        line-height: 1.5;
        margin-top: 0.25rem;
        color: var(--text2);
        letter-spacing: -0.004em;

        @media screen and (max-width: 768px) {
          margin-top: 0.5rem;
          font-size: 0.875rem;
          letter-spacing: -0.004em;
        }
      }
    }
  }
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  background: var(--bg-element3);

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export default User;
