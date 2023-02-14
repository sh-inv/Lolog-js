import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../store/modules/user';
import styled from 'styled-components';
import { apiClient } from '../../api';
import UserProfile from './UserProfile';
import UserIntro from './UserIntro';
import UserInfo from './UserInfo';
import { settingMaxWidth1024px, settingMaxWidth768px, settingUserMaxWidth768px } from '../../styles/media';

const Setting = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    const loader = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        };
        const {
          data: { user },
        } = await apiClient.get('/users', config);
        dispatch(setUser(user));
      } catch (error) {
        console.log(error);
        dispatch(setUser(null));
      }
    };
    loader();
  }, [user]);

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
