import { useState } from 'react';
import styled from 'styled-components';
import { FiPlusSquare, FiMinusSquare } from 'react-icons/fi';
import CommentContent from '../../../components/Comment/CommentContent';
import Textarea from '../../../components/Comment/Textarea';

const Comment = ({ commentData, getPostData }) => {
  const { nested_comments, comment_id, post_id } = commentData;
  const [isNestedCommentsOpen, setIsNestedCommentsOpen] = useState(false);
  const nestedCommentsBtnHandler = () => {
    setIsNestedCommentsOpen(!isNestedCommentsOpen);
  };

  return (
    <CommentContainer>
      <CommentContent commentData={commentData} getPostData={getPostData} />
      <div className='nested-comments-box'>
        <span className='open-btn' onClick={nestedCommentsBtnHandler}>
          {isNestedCommentsOpen ? (
            <>
              <FiMinusSquare className='icon' />
              <span>숨기기</span>
            </>
          ) : (
            <>
              <FiPlusSquare className='icon' />
              <span>{nested_comments ? `${nested_comments.length}개의 댓글` : '댓글 달기'}</span>
            </>
          )}
        </span>
        {(() => {
          if (isNestedCommentsOpen) {
            if (nested_comments) {
              return (
                <>
                  <div className='nested-comments-list-box'>
                    {nested_comments.map(nested_comment => (
                      <CommentContent key={nested_comment.comment_id} isNested={true} commentData={nested_comment} getPostData={getPostData} />
                    ))}
                  </div>
                  <div className='neted-comment-box'>
                    <Textarea postId={post_id} commentId={comment_id} isNested={true} />
                  </div>
                </>
              );
            }
            return (
              <div className='comment-box'>
                <Textarea postId={post_id} commentId={comment_id} isNested={true} />
              </div>
            );
          }
          return;
        })()}
      </div>
    </CommentContainer>
  );
};

const CommentContainer = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border4);

  :nth-last-child(1) {
    border-top: none;
  }

  .nested-comments-box {
    margin-top: 2rem;

    .open-btn {
      display: inline-flex;
      align-items: center;
      color: var(--primary1);
      cursor: pointer;

      &:hover {
        color: var(--primary2);
      }

      .icon {
        margin-right: 0.5rem;
        margin-bottom: 0.2rem;
      }
    }

    .nested-comments-list-box {
      padding: 0 1.5rem 1.5rem 1.5rem;
      margin-top: 1.3125rem;
    }

    .comment-box {
      padding: 1.5rem;
      margin-top: 1.3125rem;
    }

    .neted-comment-box {
      padding: 0 1.3125rem 1.3125rem 1.3125rem;
    }
  }
  @media screen and (max-width: 768px) {
  }
`;

export default Comment;
