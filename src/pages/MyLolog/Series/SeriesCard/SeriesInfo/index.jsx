import { Link } from 'react-router-dom';
import GetPostDate from '../../../../../components/GetPostDate';
import styled from 'styled-components';
import { SeriesInfoMaxWidth768px } from '../../../../../styles/media';

const SeriesInfo = ({ title, update, postCount }) => {
  return (
    <SeriesInfoContainer>
      <h4>
        <Link to=''>{title}</Link>
      </h4>
      <div className='info'>
        <span className='count'>{postCount}개의 포스트</span>
        <span className='dot'>·</span>
        마지막 업데이트 <GetPostDate postDate={update} />
      </div>
    </SeriesInfoContainer>
  );
};

const SeriesInfoContainer = styled.div`
  h4 {
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    line-height: 1.5;
    color: var(--text1);
    overflow: hidden;

    ${SeriesInfoMaxWidth768px};
  }

  .info {
    font-size: 0.875rem;
    color: var(--text3);

    ${SeriesInfoMaxWidth768px};

    .count {
      color: var(--text1);
    }

    .dot {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
  }
`;

export default SeriesInfo;
