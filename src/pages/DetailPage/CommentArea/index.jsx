import styled from 'styled-components';
import Textarea from '../../../components/Comment/Textarea';
import Comment from './Comment';

const CommentArea = ({ comments }) => {
  return (
    comments && (
      <CommentAreaContainer>
        <h4 className='comments-count'>{comments.length}개의 댓글</h4>
        <Textarea />
        <div className='comments-list' comments={comments}>
          {comments.map(commentData => (
            <Comment key={commentData.comment_id} commentData={commentData} />
          ))}
        </div>
      </CommentAreaContainer>
    )
  );
};

const CommentAreaContainer = styled.div`
  margin-top: 3rem;
  color: var(--text1);

  .comments-count {
    font-size: 1.125rem;
    line-height: 1.5;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .comments-list {
    margin-top: 2.5rem;
  }
`;

export default CommentArea;
