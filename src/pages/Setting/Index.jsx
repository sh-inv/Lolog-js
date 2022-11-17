import UserProfile from '../../components/Setting/UserProfile';
import UserIntroduction from '../../components/Setting/UserIntroduction';
import UserInformation from '../../components/Setting/UserInformation';
import styled from 'styled-components';
import { settingMaxWidth1024px, settingMaxWidth768px, settingUserMaxWidth768px } from '../../styles/media';

const Setting = () => {
  return (
    <SettingPage>
      <section className='setting-user'>
        <UserProfile />
        <UserIntroduction />
      </section>
      <UserInformation />
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

  .setting-user {
    display: flex;
    height: 13.75rem;

    ${settingUserMaxWidth768px};
  }
`;

export default Setting;
