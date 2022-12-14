import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { apiClient } from '../../../api';
import Followee from './Followee';

const FollowList = () => {
  const [followList, setFollowList] = useState([]);
  const [isNoFollowee, setIsNoFollowee] = useState(false);

  useEffect(() => {
    const getLoader = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
        };
        const { data } = await apiClient.get('users/follow', config);
        setFollowList(data.follow);
      } catch (error) {
        console.log(error);
      }
    };
    getLoader();
  }, [followList]);

  return (
    followList && (
      <FollowListContainer>
        {followList.map(follow => {
          return <Followee key={follow.followee_id} id={follow.followee_id} intro={follow.about_me} profile={follow.profile_image} name={follow.name} />;
        })}
      </FollowListContainer>
    )
  );
};

const FollowListContainer = styled.div``;

export default FollowList;
