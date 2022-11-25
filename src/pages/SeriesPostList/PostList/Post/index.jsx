import { Link } from 'react-router-dom';
import Thumbnail from '../../../../components/Thumbnail';
import GetPostDate from '../../../../components/GetPostDate';
import styled from 'styled-components';

const Post = ({ id, title, src, contents, date, className }) => {
  return (
    <PostContainer className={className}>
      <h2>
        <span className='number'>{id}. </span>
        <Link to={`/id/${title}`} className='title'>
          {title}
        </Link>
      </h2>
      <section>
        <Link to={`/id/${title}`} className='thumbnail-wrapper'>
          <Thumbnail src={src} className={'no-thumbnail'} />
        </Link>
        <div className='post-info'>
          <p className='summary'>{contents}</p>
          <GetPostDate postDate={date} />
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
      word-break: break-all;
      transition: color 0.125s ease-in 0s;

      &:hover {
        text-decoration: underline;
      }
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

    @media screen and (max-width: 768px) {
      flex-direction: column;
      height: auto;
    }

    .thumbnail-wrapper {
      img {
        position: inherit;
        margin-right: 1rem;
        width: 12rem;
        height: 6.25rem;
        object-fit: cover;
        box-shadow: rgb(0 0 0 / 15%) 0px 0px 1px 0px;

        @media screen and (max-width: 768px) {
          width: 100%;
          height: 100%;
        }
      }

      .no-thumbnail {
        @media screen and (max-width: 768px) {
          display: none;
        }
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

        @media screen and (max-width: 768px) {
          margin-top: 0.5rem;
        }
      }

      span {
        color: var(--text3);
        font-size: 0.875rem;

        @media screen and (max-width: 768px) {
          margin-top: 1rem;
        }
      }
    }
  }
`;

export default Post;
