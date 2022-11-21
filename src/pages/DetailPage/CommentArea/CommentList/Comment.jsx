import styled from 'styled-components';
import UserProfileImage from '../../../../components/UserProfileImage';

const Comment = ({ comment }) => {
  const { comment_profile_image, content, create_at, nested_comments, comments_is_writer } = comment;
  console.log(comment_profile_image, content, create_at, nested_comments, comments_is_writer);
  return (
    <CommentContainer>
      <div className='profile-box'>
        <UserProfileImage />
      </div>
    </CommentContainer>
  );
};

const CommentContainer = styled.div`
  padding: 1.5rem 0;
  border: 1px solid red;

  .profile-box {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
  }
`;

export default Comment;
