import styled from 'styled-components';
import { FiUserPlus, FiUserCheck } from 'react-icons/fi';
import Button from '../Button';

const FollowButton = ({ isFollower, checked, onClick }) => {
  return (
    <FollowButtonContainer>
      <Button icon={isFollower || checked ? <FiUserCheck /> : <FiUserPlus />} text={isFollower || checked ? '구독 중' : '구독하기'} color={isFollower || checked ? 'teal' : 'darkgray'} onClick={onClick} />
    </FollowButtonContainer>
  );
};

const FollowButtonContainer = styled.div`
  button {
    width: 7rem;
    padding: 0 0.75rem;

    svg {
      margin-left: 5px;
    }
  }
`;

export default FollowButton;
