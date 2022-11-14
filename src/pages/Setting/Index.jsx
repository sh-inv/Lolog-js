import UserImage from '../../components/Setting/UserImage';
import UserIntroduction from '../../components/Setting/UserIntroduction';
import UserContents from '../../components/Setting/UserContents';
import styled from 'styled-components';
import { settingMaxWidth1024px, settingMaxWidth768px } from '../../styles/media';

const Setting = () => {
  return (
    <SettingPage>
      <section className='setting-user'>
        <UserImage />
        <UserIntroduction />
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

  .setting-user {
    display: flex;
    height: 13.75rem;

    @media (max-width: 768px) {
      height: auto;
      flex-direction: column;
    }
  }
`;

export default Setting;
