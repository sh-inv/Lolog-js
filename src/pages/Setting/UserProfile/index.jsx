import UserProfileImage from '../../../components/UserProfileImage';
import Button from '../../../components/Button';
import styled from 'styled-components';
import { settingProfileMaxWidth768px, settingProfileButtonMaxWidth768px, UserProfileImageMaxWidth768px } from '../../../styles/media';

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

  img {
    width: 8rem;
    height: 8rem;
    margin-bottom: 1.25rem;

    ${UserProfileImageMaxWidth768px};
  }

  button {
    ${settingProfileButtonMaxWidth768px};
  }

  .upload {
    background: var(--primary1);
    color: var(--button-text);

    &:hover {
      background: var(--primary2);
    }
  }

  .remove {
    background: transparent;
    color: var(--primary1);

    &:hover {
      background: var(--slight-layer);
      color: var(--primary2);
    }
  }

  button + button {
    margin-top: 0.5rem;
    margin-left: 0px;
  }
`;

export default UserProfile;
