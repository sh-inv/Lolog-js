import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setId,
  setProfileImage,
  setName,
  setIntro,
  setTitle,
  setSocialInfo,
  setEmail,
  setCommentAlert,
  setUpdateAlert,
  setSocialInfoEmail,
  setSocialInfoGithub,
  setSocialInfoTwitter,
  setSocialInfoFacebook,
  setSocialInfoUrl,
} from '../../store/modules/user';
import styled from 'styled-components';
import { apiClient } from '../../api';
import UserProfile from './UserProfile';
import UserIntro from './UserIntro';
import UserInfo from './UserInfo';
import { settingMaxWidth1024px, settingMaxWidth768px, settingUserMaxWidth768px } from '../../styles/media';

import axios from 'axios';

// const getSettingApi = async () => {
//   const config = {
//     headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MywibG9naW5faWQiOiJ0ZXN0VXNlciIsIm5hbWUiOiLthYzsiqTtirgifSwiaWF0IjoxNjY5NjMwNjE5fQ.qPQNhe2qVb8VMnrlxueDGBFHYkOkfwrZCiENYXevp4I` },
//   };
//   const resp = await apiClient.get('/users', config);
//   return resp.data?.data;
// };

const Setting = () => {
  const dispatch = useDispatch();
  const [settingInfo, setSettingInfo] = useState(null);

  // useEffect(() => {
  //   const loader = async () => {
  //     try {
  //       const data = await getSettingApi();
  //       setSettingInfo(data);
  //     } catch (error) {
  //       console.error(error);
  //       setSettingInfo(null);
  //     }
  //   };
  //   loader();
  // }, []);

  const getLoader = async () => {
    try {
      const { data } = await axios.get('data/setting/user.json');
      setSettingInfo(data.user);
      console.log(data);
    } catch (error) {
      console.log(error);
      setSettingInfo(null);
    }
  };

  useEffect(() => {
    getLoader();
  }, []);

  dispatch(setId(settingInfo.id));
  dispatch(setProfileImage(settingInfo.profile_image));
  dispatch(setName(settingInfo.name));
  dispatch(setIntro(settingInfo.about_me));
  dispatch(setTitle(settingInfo.title));
  dispatch(setEmail(settingInfo.email));
  dispatch(setCommentAlert(settingInfo.comment_alert));
  dispatch(setUpdateAlert(settingInfo.update_alert));
  dispatch(setSocialInfoEmail(settingInfo.social_info_email));
  dispatch(setSocialInfoGithub(settingInfo.social_info_github));
  dispatch(setSocialInfoTwitter(settingInfo.social_info_twitter));
  dispatch(setSocialInfoFacebook(settingInfo.social_info_facebook));
  dispatch(setSocialInfoUrl(settingInfo.social_info_url));

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
