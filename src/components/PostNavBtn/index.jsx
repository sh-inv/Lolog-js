import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';

const PostNavBtn = ({ isLeft, postData }) => {
  const { post_id, title } = postData;

  return (
    <PostNavBtnContainer to={`/posts/${post_id}`} className='navigater' isLeft={isLeft}>
      {isLeft && (
        <div className='btn'>
          <FiArrowLeft className='arrow' />
        </div>
      )}
      <div className='content'>
        <div className='post'>{isLeft ? '이전' : '다음'} 포스트</div>
        <h3 className='text'>{title}</h3>
      </div>
      {!isLeft && (
        <div className='btn'>
          <FiArrowLeft className='arrow' />
        </div>
      )}
    </PostNavBtnContainer>
  );
};

const PostNavBtnContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: ${({ isLeft }) => !isLeft && 'flex-end'};
  width: 360px;
  height: 4rem;
  padding: 0 1rem;
  background: var(--bg-element2);

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    margin: ${({ isLeft }) => (isLeft ? '0 1rem 0 0' : '0 0 0 1rem')};
    border: 1px solid var(--primary2);
    border-radius: 16px;

    .arrow {
      font-size: 1.5rem;
      color: var(--primary2);
      transform: ${({ isLeft }) => !isLeft && 'rotate(180deg)'};
    }
  }

  .content {
    ${({ isLeft }) => !isLeft && `display: flex; flex-direction: column; align-items: flex-end;`}
    width: calc(100% - 32px - 1rem);
    line-height: 1;
    color: var(--text2);

    .post {
      font-size: 0.75rem;
      font-weight: bold;
    }

    .text {
      width: 100%;
      font-size: 1.125rem;
      text-align: ${({ isLeft }) => !isLeft && 'right'};
      margin-top: 0.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    :nth-last-child(2) {
      margin-bottom: 1.5rem;
    }

    .content {
      .text {
        font-size: 1rem;
      }
    }
  }
`;

export default PostNavBtn;
