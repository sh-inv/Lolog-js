import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { apiClient } from '../../../../api';
import UserProfileImage from '../../../../components/UserProfileImage';
import FollowButton from '../../../../components/FollowButton';
import ConfirmModal from '../../../../components/ConfirmModal';
import Toastify from '../../../../components/Toastify';

const Followee = ({ id, name, intro, profile }) => {
  const [isModal, setIsModal] = useState(false);

  const unFollow = async () => {
    const body = {
      followee_id: id,
    };
    try {
      await apiClient.delete('users/follow', { headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }, data: body });
      setIsModal(false);
      toast.success('팔로우가 해제되었습니다');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FolloweeContainer>
        <Link to={`/${id}`} className='profile-wrapper'>
          <UserProfileImage source={profile} />
        </Link>
        <div className='followee-wrapper'>
          <div className='intro-wrapper'>
            <Link to={`/${id}`}>
              <h3>{name}</h3>
            </Link>
            <p>{intro}</p>
          </div>
          <FollowButton
            checked={true}
            onClick={() => {
              setIsModal(true);
            }}
          />
        </div>
        <Toastify />
      </FolloweeContainer>
      {isModal && (
        <ConfirmModal
          title='팔로우 취소'
          message='팔로우를 해제하시겠습니까?'
          onClose={() => {
            setIsModal(false);
          }}
          onMove={unFollow}
        />
      )}
    </>
  );
};

const FolloweeContainer = styled.div`
  display: flex;
  align-items: center;
  height: 10rem;
  border-bottom: 1px solid var(--border2);

  .profile-wrapper {
    display: flex;
    flex-direction: column;
    padding-right: 1.5rem;

    img {
      width: 8rem;
      height: 8rem;
    }
  }

  .followee-wrapper {
    display: flex;
    flex: 1 1 0%;
    align-items: center;

    .intro-wrapper {
      flex: 1 1 0%;
      padding-left: 1.5rem;

      h3 {
        margin: 0px;
        line-height: 1.5;
        font-size: 1.25rem;
      }

      p {
        margin-top: 0.25rem;
        margin-bottom: 0.5rem;
        line-height: 1.5;
        font-size: 1rem;
        color: var(--text3);
      }
    }
  }
`;

export default Followee;
