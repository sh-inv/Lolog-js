import styled from 'styled-components';
import Textarea from '../../../components/Comment/Textarea';
import Comment from './Comment';

const CommentArea = ({ postData, getPostData }) => {
  const { post, comments } = postData;
  return (
    <CommentAreaContainer>
      <h4 className='comments-count'>{comments ? comments.length : '0'}개의 댓글</h4>
      <Textarea postId={post.post_id} getPostData={getPostData} />
      <div className='comments-list'>{comments && comments.map(commentData => <Comment key={commentData.comment_id} commentData={commentData} getPostData={getPostData} />)}</div>
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
