import Button from '../../Button';
import profile from '../../../assets/profile.png';
import styled from 'styled-components';

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

    @media screen and (max-width: 768px) {
      width: 6rem;
      height: 6rem;
      margin-bottom: 1rem;
    }
  }

  button {
    @media screen and (max-width: 768px) {
      width: 10rem;
    }
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

  @media (max-width: 768px) {
    -webkit-box-align: center;
    align-items: center;
    padding-bottom: 1.5rem;
    padding-right: 0px;
  }
`;

export default UserProfile;
