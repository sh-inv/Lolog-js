import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProfileImage, setName, setIntro, setLologTitle, setSocialInfo, setEmail } from '../../store/modules/user';
import { apiClient } from '../../api';
import UserProfile from './UserProfile';
import UserIntro from './UserIntro';
import UserInfo from './UserInfo';
import styled from 'styled-components';
import { settingMaxWidth1024px, settingMaxWidth768px, settingUserMaxWidth768px } from '../../styles/media';

const Setting = () => {
  const dispatch = useDispatch();
  const { name, intro } = useSelector(state => state.user);

  // useEffect(async () => {
  //   const response = await apiClient.get('user?type=name').then(res => dispatch(setName(response.data.name)));
  //   console.log(response);
  // }, []);

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
