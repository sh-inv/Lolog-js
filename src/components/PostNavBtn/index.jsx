import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';

const PostNavBtn = ({ isLeft, postData }) => {
  const { post_id, title } = postData;

  return (
    <PostNavBtnContainer isLeft={isLeft}>
      <Link to={`/posts/${post_id}`} className='navigater'>
        {isLeft && (
          <div className='btn'>
            <FiArrowLeft />
          </div>
        )}
        <div className='content'>
          <div className='post'>{isLeft ? '이전' : '다음'} 포스트</div>
          <h3 className='text'>{title}</h3>
        </div>
        {!isLeft && (
          <div className='btn right'>
            <FiArrowLeft />
          </div>
        )}
      </Link>
    </PostNavBtnContainer>
  );
};

const PostNavBtnContainer = styled.div`
  width: 360px;

  .navigater {
    display: flex;
    align-items: center;
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    box-shadow: rgb(0 0 0 / 6%) 0 0 4px 0;
    background: var(--bg-element2);
    cursor: pointer;

    .btn {
      min-width: 32px;
      max-width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--primary2);
      font-size: 1.5rem;
      color: var(--primary2);
      margin: 0 1rem 0 0;
    }

    .right {
      margin: 0 0 0 1rem;
      transform: rotate(180deg);
    }

    .content {
      flex: 1 1 0%;
      line-height: 1;
      color: var(--text2);

      .post {
        text-align: ${({ isLeft }) => (isLeft ? 'left' : 'right')};
        font-size: 0.75rem;
      }

      .text {
        width: 100%;
        font-size: 1.125rem;
        line-height: 1.15;
        margin-top: 0.5rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        text-align: ${({ isLeft }) => (isLeft ? '' : 'right')};
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    .navigater {
      margin: ${({ isLeft }) => (isLeft ? '0 0 1.5rem 0' : '0')};

      .text {
        font-size: 1rem;
      }
    }
  }
`;

export default PostNavBtn;
