import Button from '../../Button';
import profile from '../../../assets/profile_sample.jpg';
import styled from 'styled-components';
import { buttonText, primary1, primary2, slightLayer } from '../../../styles/color';
import { UserProfileMaxWidth768px } from '../../../styles/media';

const UserProfile = () => {
  return (
    <UserProfileContainer>
      <img alt='profile' src={profile} />
      <Button text='이미지 업로드' className='upload' />
      <Button text='이미지 제거' className='remove' />
    </UserProfileContainer>
  );
};

const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1.5rem;

  img {
    object-fit: cover;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    display: block;
    margin-bottom: 1.25rem;
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

  @media (max-width: 768px) {
    -webkit-box-align: center;
    align-items: center;
    padding-bottom: 1.5rem;
    padding-right: 0px;
  }
`;

export default UserProfile;
