import { useState } from 'react';
import { FiUserPlus, FiUserCheck } from 'react-icons/fi';
import Button from '../Button';

const FollowButton = () => {
  const [isFollow, setIsFollow] = useState(false);

  return (
    <Button
      icon={isFollow ? <FiUserCheck /> : <FiUserPlus />}
      text={isFollow ? '언팔로우' : '팔로우'}
      color={isFollow ? 'teal' : 'gray'}
      onClick={() => {
        setIsFollow(!isFollow);
      }}
    />
  );
};

export default FollowButton;
