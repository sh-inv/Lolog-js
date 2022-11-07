import UserProfile from '../../components/Setting/UserProfile/Index';
import UserContents from '../../components/Setting/UserContents/Index';
import styled from 'styled-components';

const Setting = () => {
  return (
    <SettingPage>
      <UserProfile />
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
`;

export default Setting;
