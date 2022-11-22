import UserProfileImage from '../../../components/UserProfileImage';
import UploadImage from './UploadImage';
import styled from 'styled-components';
import { settingProfileMaxWidth768px, UserProfileImageMaxWidth768px } from '../../../styles/media';

const UserProfile = () => {
  return (
    <UserProfileContainer>
      <UserProfileImage />
      <UploadImage />
    </UserProfileContainer>
  );
};

const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1.5rem;

  ${settingProfileMaxWidth768px};

  img {
    width: 8rem;
    height: 8rem;
    margin-bottom: 1.25rem;

    ${UserProfileImageMaxWidth768px};
  }
`;

export default UserProfile;
