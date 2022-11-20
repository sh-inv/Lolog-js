import { Link } from 'react-router-dom';
import Thumbnail from '../../../components/Thumbnail';
import GetPostDate from '../../../components/GetPostDate';
import styled from 'styled-components';

const Post = () => {
  return (
    <PostContainer>
      <h2>
        <span className='number'>1. </span>
        <Link to='' className='title'>
          포스트 제목 포스트 제목포스트 제목
        </Link>
      </h2>
      <section>
        <Link to='' className='thumbnail-wrapper'>
          <Thumbnail src={'https://velog.velcdn.com/images/daydreamplace/post/3efb2dc0-8fb0-4c92-bf42-17c006e5ee62/image.png'} />
        </Link>
        <div className='post-info'>
          <p className='summary'>
            ✅ e-commerce 사이트의 경우 사진 사용에서 저작권에 자유롭지 못한 점과 조회에 관련된 기능들이 메인으로 조회 기능에 치우쳐서 프로젝트를 진행하기보다는 밸런스 있게 게시판(CRUD) 형식의 사이트를 경험하고자 선정하였다. 또한 부트 캠프를 들어와서
            처음 시작하는 프로젝트인 만큼 다양한 기능을 진행해 보는 것보다는 완성도에 목표를 두고 싶었다.
          </p>
          <GetPostDate postDate='November 18, 2022 11:08:00' />
        </div>
      </section>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  h2 {
    margin: 0px;
    color: var(--text2);
    line-height: 1.5;
    font-size: 1.325rem;

    .number {
      margin-right: 0.25rem;
      color: var(--text3);
      font-style: italic;
    }

    .title {
      color: inherit;
      text-decoration: none;
      transition: color 0.125s ease-in 0s;
    }
  }

  section {
    display: flex;
    align-items: flex-start;
    flex: 1 1 0%;
    min-width: 0px;
    height: 6.25rem;
    margin-top: 1rem;
    letter-spacing: -0.004em;

    .thumbnail-wrapper {
      position: relative;
      width: 100%;
      padding-top: 52.6316%;

      img {
        margin-right: 1rem;
        width: 12rem;
        height: 6.25rem;
        object-fit: cover;
        box-shadow: rgb(0 0 0 / 15%) 0px 0px 1px 0px;
      }
    }

    .post-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      -webkit-box-pack: justify;
      height: 100%;
      min-width: 0px;

      .summary {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: 0px;
        color: var(--text2);
        font-size: 1rem;
        line-height: 1.5rem;
        overflow: hidden;
      }

      span {
        color: var(--text3);
        font-size: 0.875rem;
      }
    }
  }
`;

export default Post;
