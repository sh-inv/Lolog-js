import styled from 'styled-components';

const SeriesInfo = () => {
  return (
    <SeriesInfoContainer>
      <h4>TIL</h4>
      <div className='info'>
        <span className='count'>0개의 포스트</span>
        <span className='dot'>·</span>
        마지막 업데이트 2022년 11월 16일
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
  }

  .info {
    font-size: 0.875rem;
    color: var(--text3);

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
