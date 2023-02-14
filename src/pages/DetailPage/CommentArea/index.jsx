import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Textarea from '../../../components/Comment/Textarea';
import Comment from './Comment';

const CommentArea = ({ postData }) => {
  const { post } = postData;
  const { commentsData, commentLengthData } = useSelector(state => state.detailData);

  return (
    <CommentAreaContainer>
      <h4 className='comments-count'>{commentLengthData}개의 댓글</h4>
      <Textarea postId={post.post_id} />
      <div className='comments-list'>{commentsData && commentsData.map(commentData => <Comment key={commentData.comment_id} commentData={commentData} />)}</div>
    </CommentAreaContainer>
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
