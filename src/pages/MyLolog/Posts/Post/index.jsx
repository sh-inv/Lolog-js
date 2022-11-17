import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Thumbnail from '../../../../components/Thumbnail';
import GetPostDate from '../../../../components/GetPostDate';
import { BsFillHeartFill } from 'react-icons/bs';

const Post = () => {
  const tags = [45, 56, 67, 5, 4235, 34, 34567, 789, 897];

  return (
    <PostContainer>
      <Link to='' className=''>
        <div className='thumbnail'>
          <Thumbnail src={'https://velog.velcdn.com/images/city7310/post/7166f1f8-41d4-4c4b-9230-640e790e7ba0/image.png'} />
        </div>
      </Link>
      <Link to=''>
        <h2 className='title'>[파이썬 튜토리얼] list 타입</h2>
      </Link>
      <p className='txt'>컨테이너, Iterable, list 리터럴 표현식, sum, len</p>
      <div className='tags'>
        {tags.map(tag => (
          <Link to='' key={tag} className='tag'>
            {tag}
          </Link>
        ))}
      </div>
      <div className='sub-info'>
        <GetPostDate postDate={'November 16, 2022 11:08:00'} /> · 0개의 댓글 · <BsFillHeartFill className='icon' /> 0
      </div>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  border-top: 1px solid var(--border4);
  padding: 4rem 0;
  line-height: 1.5;

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
`;

export default Post;
