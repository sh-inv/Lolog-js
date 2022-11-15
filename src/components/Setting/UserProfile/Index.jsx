import UserProfileImage from './UserProfileImage';
import Button from '../../Button';
import styled from 'styled-components';
import { buttonText, primary1, primary2, slightLayer } from '../../../styles/color';
import { settingProfileMaxWidth768px, settingProfileButtonMaxWidth768px } from '../../../styles/media';

const UserProfile = () => {
  return (
    <UserProfileContainer>
      <UserProfileImage />
      <Button text='이미지 업로드' className='upload' />
      <Button text='이미지 제거' className='remove' />
    </UserProfileContainer>
  );
};

const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1.5rem;

  ${settingProfileMaxWidth768px};

  button {
    ${settingProfileButtonMaxWidth768px};
  }

  .upload {
    background: ${primary1};
    color: ${buttonText};

    &:hover {
      background: ${primary2};
    }
  }

  .remove {
    background: transparent;
    color: ${primary1};

    &:hover {
      background: ${slightLayer};
      color: ${primary2};
    }
  }

  button + button {
    margin-top: 0.5rem;
    margin-left: 0px;
  }
`;

export default UserProfile;
