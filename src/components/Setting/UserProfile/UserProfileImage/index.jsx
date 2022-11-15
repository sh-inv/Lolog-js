import profile from '../../../../assets/profile.png';
import styled from 'styled-components';
import { UserProfileImageMaxWidth768px } from '../../../../styles/media';

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

  ${UserProfileImageMaxWidth768px};
`;

export default UserProfileImage;
