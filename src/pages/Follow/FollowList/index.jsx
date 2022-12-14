import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { apiClient } from '../../../api';
import Followee from './Followee';
import NoFollowee from './NoFollowee';

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
        console.log(data.follow);
        !data.follow && setIsNoFollowee(true);
      } catch (error) {
        console.log(error);
      }
    };
    getLoader();
  }, [followList]);

  return (
    <>
      {followList && !isNoFollowee && (
        <FollowListContainer>
          {followList.map(follow => {
            return <Followee key={follow.followee_id} id={follow.followee_id} title={follow.title} intro={follow.about_me} profile={follow.profile_image} name={follow.name} />;
          })}
        </FollowListContainer>
      )}
      {isNoFollowee && <NoFollowee />}
    </>
  );
};

const FollowListContainer = styled.div``;

export default FollowList;
