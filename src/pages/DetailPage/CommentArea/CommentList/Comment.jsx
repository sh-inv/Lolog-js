import styled from 'styled-components';
import { FiPlusSquare, FiMinusSquare } from 'react-icons/fi';
import { useState } from 'react';
import CommentContent from '../../../../components/Comment/CommentContent';

const Comment = ({ commentData }) => {
  const { comment_profile_image, content, create_at, comment_login_id, nested_comments, comments_is_writer } = commentData;
  const [isNestedCommentsOpen, setIsNestedCommentsOpen] = useState(false);
  const nestedCommentsBtnHandler = () => {
    setIsNestedCommentsOpen(!isNestedCommentsOpen);
  };
  const nestedCommentJSX = () => {
    if (isNestedCommentsOpen) {
      if (nested_comments) {
        return (
          <div className='nested-comments-list-box'>
            {nested_comments.map(nested_comment => (
              <CommentContent
                key={nested_comment.nested_comment_id}
                isNested={true}
                profile_img={nested_comment.nested_comment_profile_image}
                create_at={nested_comment.nested_comment_create_at}
                user_id={nested_comment.nested_comment_user_id}
                is_writer={nested_comment.nested_comments_is_writer}
                content={nested_comment.nested_comment_content}
              />
            ))}
          </div>
        );
      } else {
        return;
      }
    }
    return;
  };

  return (
    <CommentContainer>
      <CommentContent profile_img={comment_profile_image} create_at={create_at} user_id={comment_login_id} is_writer={comments_is_writer} content={content} />
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
        {nestedCommentJSX()}
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
  }
`;

export default Comment;
