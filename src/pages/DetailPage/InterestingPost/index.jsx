import styled from 'styled-components';
import Post from '../../../components/PostList/Post';

const InterestingPost = ({ interestingPostData }) => {
  console.log(interestingPostData);
  return (
    <InterestingPostContainer>
      <div className='title'>관심 있을 만한 포스트</div>
      <div className='content'>
        <div className='post-list'>
          {interestingPostData.map(data => (
            <Post key={data.post_id} postData={data} />
          ))}
        </div>
      </div>
    </InterestingPostContainer>
  );
};

const InterestingPostContainer = styled.div`
  position: relative;
  z-index: 5;
  padding: 4rem 0;
  margin-top: 4rem;
  background: var(--bg-page1);
  box-shadow: rgb(0 0 0 / 4%) 0px -16px 16px;

  .title {
    margin-bottom: 3.5rem;
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    color: var(--text2);
  }

  .content {
    width: 1376px;
    margin: 0 auto;
    padding-bottom: 3rem;

    .post-list {
      display: flex;
      flex-wrap: wrap;
      margin: -1rem;
    }
  }

  @media screen and (max-width: 1440px) {
    .content {
      width: 1024px;
    }
  }

  @media screen and (max-width: 1376px) {
    padding: 2rem 0 1rem 0;

    .title {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 1056px) {
    .content {
      width: 100%;
      padding: 0 1rem;
    }
  }

  /* @media screen and (max-width: 1440px) {
  } */
`;

export default InterestingPost;
