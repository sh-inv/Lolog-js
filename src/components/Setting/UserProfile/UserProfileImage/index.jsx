import profile from '../../../../assets/profile.png';
import styled from 'styled-components';

const UserProfileImage = () => {
  return <UserProfileImageContainer alt='profile' src={profile} />;
};

const UserProfileImageContainer = styled.img`
  display: block;
  width: 8rem;
  height: 8rem;
  margin-bottom: 1.25rem;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 6rem;
    height: 6rem;
    margin-bottom: 1rem;
  }
`;

export default UserProfileImage;
