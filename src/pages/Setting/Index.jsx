import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../store/modules/user';
import styled from 'styled-components';
import { apiClient } from '../../api';
import UserProfile from './UserProfile';
import UserIntro from './UserIntro';
import UserInfo from './UserInfo';
import { settingMaxWidth1024px, settingMaxWidth768px, settingUserMaxWidth768px } from '../../styles/media';

import axios from 'axios';

const getSettingApi = async () => {
  const config = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MSwibG9naW5faWQiOiJqb3NlcGhzY2FobjEiLCJuYW1lIjoi7JWI7IiY7LKgMSJ9LCJpYXQiOjE2Njk4MDU5MjJ9.Tt81yQZSWMitJP-O_wEzXY1I90iqlpXB_qbA2hbhLvo`,
    },
  };
  const resp = await apiClient.get('/users', config);
  return resp.data?.data;
};

const Setting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loader = async () => {
      try {
        const {
          data: { user },
        } = await getSettingApi();
        dispatch(setUser(user));
      } catch (error) {
        console.log(error);
        dispatch(setUser(null));
      }
    };
    loader();
  }, []);

  // useEffect(() => {
  //   const loader = async () => {
  //     try {
  //       const config = {
  //         headers: {
  //           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MSwibG9naW5faWQiOiJqb3NlcGhzY2FobjEiLCJuYW1lIjoi7JWI7IiY7LKgMSJ9LCJpYXQiOjE2Njk4MTIyMDN9.NYh36rjSojciJ_J9ndpe_AJPxDcpzFwqmNUon5KCbHQ`,
  //         },
  //       };
  //       const {
  //         data: { user },
  //       } = await apiClient.get('/users', config);
  //       dispatch(setUser(user));
  //       console.log(user);
  //     } catch (error) {
  //       console.log(error);
  //       dispatch(setUser(null));
  //     }
  //   };
  //   loader();
  // }, []);

  // mock data
  // const getLoader = async () => {
  //   try {
  //     const {
  //       data: { user },
  //     } = await axios.get('data/setting/user.json');
  //     dispatch(setUser(user));
  //     // console.log(user);
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(setUser(null));
  //   }
  // };

  // useEffect(() => {
  //   getLoader();
  // }, []);

  // console.log(user);

  return (
    <SettingPage>
      <section className='setting-top'>
        <UserProfile />
        <UserIntro />
      </section>
      <UserInfo />
    </SettingPage>
  );
};

const SettingPage = styled.div`
  width: 768px;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 5rem;

  ${settingMaxWidth1024px};
  ${settingMaxWidth768px};

  .setting-top {
    display: flex;
    height: 13.75rem;

    ${settingUserMaxWidth768px};
  }
`;

export default Setting;
