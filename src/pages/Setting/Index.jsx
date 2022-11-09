import UserProfile from '../../components/Setting/UserProfile';
import UserInfo from '../../components/Setting/UserInfo';
import UserContents from '../../components/Setting/UserContents';
import styled from 'styled-components';
import { settingMaxWidth1024px, settingMaxWidth768px } from '../../styles/media';

const Setting = () => {
  return (
    <SettingPage>
      <section className='setting-top'>
        <UserProfile />
        <UserInfo />
      </section>
      <UserContents />
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

    @media (max-width: 768px) {
      height: auto;
      flex-direction: column;
    }
  }
`;

export default Setting;
