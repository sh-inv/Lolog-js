import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Thumbnail from '../../../../components/Thumbnail';
import GetPostDate from '../../../../components/GetPostDate';
import { BsFillHeartFill } from 'react-icons/bs';

const MyLologPost = ({ postData }) => {
  const { create_at, post_comment_count, post_description, post_id, post_likes, post_thumbnail, post_title, tags } = postData;

  return (
    <PostContainer>
      {post_thumbnail && (
        <Link to={`/posts/${post_id}`}>
          <div className='thumbnail'>
            <Thumbnail src={post_thumbnail} />
          </div>
        </Link>
      )}
      <Link to={`/posts/${post_id}`}>
        <h2 className='title'>{post_title}</h2>
      </Link>
      <p className='txt'>{post_description}</p>
      {tags && (
        <div className='tags'>
          {tags.map(tag => (
            <div key={tag.tag_id} className='tag'>
              {tag.tag_name}
            </div>
          ))}
        </div>
      )}
      <div className='sub-info'>
        <GetPostDate postDate={create_at} /> · {post_comment_count}개의 댓글 · <BsFillHeartFill className='icon' /> {post_likes}
      </div>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  border-top: 1px solid var(--border4);
  padding: 4rem 0;
  line-height: 1.5;

  :nth-child(1) {
    border-top: none;
  }

  .thumbnail {
    position: relative;
    width: 100%;
    padding-top: 52.356%;
    margin-bottom: 1rem;
  }

  .title {
    font-size: 1.5rem;
    color: var(--text1);
    word-break: keep-all;
  }

  .txt {
    margin: 0.5rem 0 2rem 0;
    font-size: 1rem;
    color: var(--text2);
    word-break: keep-all;
    overflow-wrap: break-word;
  }

  .tags {
    margin-bottom: -0.875rem;

    .tag {
      display: inline-flex;
      padding: 0 1rem;
      align-items: center;
      height: 2rem;
      border-radius: 1rem;
      margin-bottom: 0.875rem;
      margin-right: 0.875rem;
      background: var(--bg-element3);
      color: var(--primary1);
      font-weight: 500;
      font-size: 1rem;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  .sub-info {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    font-size: 0.875rem;
    color: var(--text3);
    line-height: 1.5;

    .icon {
      margin: 0 0.2rem 0 0.4rem;
    }
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 2rem;

    .title {
      font-size: 1rem;
    }

    .txt {
      margin: 0.5rem 0 1.5rem 0;
      font-size: 0.875rem;
    }

    .sub-info {
      font-size: 0.75rem;
    }

    .tags {
      margin-bottom: -0.5rem;

      .tag {
        padding: 0 0.75rem;
        height: 1.5rem;
        border-radius: 0.75rem;
        margin-bottom: 0.5rem;
        margin-right: 0.5rem;
        background: var(--bg-element3);
        color: var(--primary1);
        font-weight: 500;
        font-size: 1rem;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;

export default MyLologPost;
