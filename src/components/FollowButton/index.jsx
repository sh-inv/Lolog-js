import styled from 'styled-components';
import { FiUserPlus, FiUserCheck } from 'react-icons/fi';
import Button from '../Button';

const FollowButton = ({ isFollow, checked, onClick }) => {
  return (
    <FollowButtonContainer>
      <Button icon={isFollow || checked ? <FiUserCheck /> : <FiUserPlus />} text={isFollow || checked ? '구독 중' : '구독하기'} color={isFollow || checked ? 'teal' : 'darkgray'} onClick={onClick} />
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
