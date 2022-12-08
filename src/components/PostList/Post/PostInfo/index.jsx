import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GetPostDate from '../../../GetPostDate';

const PostInfo = ({ postData }) => {
  const { create_at, post_comment_count, post_id, post_title, post_description } = postData;

  return (
    <PostInfoContainer>
      <Link to={`/posts/${post_id}`}>
        <h4 className='post-title'>{post_title}</h4>
        <div className='main-text'>{post_description}</div>
      </Link>
      <div className='sub-info'>
        <GetPostDate postDate={create_at} /> · {post_comment_count}개의 댓글
      </div>
    </PostInfoContainer>
  );
};

const PostInfoContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  padding: 1rem;

  .post-title {
    margin-bottom: 0.25rem;
    font-size: 1rem;
    line-height: 1.5;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(--text1);
  }

  .main-text {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-bottom: 1.5rem;
    overflow-wrap: break-word;
    font-size: 0.875rem;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--text2);
  }

  .sub-info {
    font-size: 0.75rem;
    line-height: 1.5;
    color: var(--text2);
  }
`;

export default PostInfo;
