import profile from '../../assets/profile.png';
import styled from 'styled-components';

const UserProfileImage = ({ source }) => {
  return <UserProfileImageContainer alt='profile' src={source ? source : profile} />;
};

const UserProfileImageContainer = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export default UserProfileImage;
