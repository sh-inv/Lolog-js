import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { apiClient } from '../../../api';
import Followee from './Followee';

const FollowList = () => {
  const [followList, setFollowList] = useState([
    {
      name: '안수철1',
      title: 'josephscahn1.log',
      about_me: 'josephscahn1',
      followee_id: 1,
      profile_image: null,
    },
    {
      name: '안수철2',
      title: 'josep1.log',
      about_me: 'josahn1',
      followee_id: 2,
      profile_image: 'https://velog.velcdn.com/images/daydreamplace/profile/db9a7c9b-8b5e-4134-9089-2a5faee9e29e/image.jpeg',
    },
  ]);

  // useEffect(() => {
  //   const getLoader = async () => {
  //     try {
  //       const config = {
  //         headers: { Authorization: `Bearer ${token}` },
  //       };
  //       const { data } = await apiClient.get('users/follow', config);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getLoader();
  // }, []);

  // console.log(followList);

  return (
    <FollowListContainer>
      {followList.map(follow => {
        return <Followee key={follow.followee_id} intro={follow.about_me} profile={follow.profile_image} name={follow.name} />;
      })}
    </FollowListContainer>
  );
};

const FollowListContainer = styled.div``;

export default FollowList;
