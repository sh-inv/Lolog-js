import { useState } from 'react';
import styled from 'styled-components';
import { FiUserPlus, FiUserCheck } from 'react-icons/fi';
import Button from '../Button';

const FollowButton = () => {
  const [isFollow, setIsFollow] = useState(false);

  return (
    <FollowButtonContainer>
      <Button
        icon={isFollow ? <FiUserCheck /> : <FiUserPlus />}
        text={isFollow ? '구독 중' : '구독하기'}
        color={isFollow ? 'teal' : 'gray'}
        onClick={() => {
          setIsFollow(!isFollow);
        }}
      />
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
