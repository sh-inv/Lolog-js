import styled from 'styled-components';

const Series = () => {
  return (
    <SeriesContainer>
      <h2>
        <a href=''>series-title</a>
      </h2>
      <div className='bookmark-icon'>bookmark</div>
      <div className='series-list-wrapper'>
        <div className='list-route-toggle'>
          <div className='arrow-icon'>arrow</div>
          목록 보기
        </div>
        <div className='list-route-btn'>
          <div className='series-number'>6/6</div>
          <div className='btn-wrapper'>
            <button className='pre'></button>
            <button className='next'></button>
          </div>
        </div>
      </div>
    </SeriesContainer>
  );
};

const SeriesContainer = styled.div`
  margin-top: 2rem;
  padding: 2rem 1.5rem;
  background: var(--bg-element2);
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 6%) 0px 0px 4px 0px;
  position: relative;
  .bookmark-icon {
    position: absolute;
    right: 1.5rem;
    top: 0px;
  }
  .series-list-wrapper {
    margin-top: 3rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    .list-route-toggle {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      margin-left: -5px;
      color: var(--text2);
      line-height: 1;
      cursor: pointer;
      .arrow-icon {
        margin-right: 0.25rem;
        color: var(--text1);
        font-size: 1.5rem;
      }
    }
    .list-route-btn {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      .series-number {
        font-size: 0.875rem;
        color: var(--text3);
      }
      .btn-wrapper {
        display: flex;
        margin-left: 1.125rem;
        button {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          outline: none;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          font-size: 1.25rem;
          color: var(--primary1);
          background: var(--bg-element1);
          border: 1px solid var(--border4);
          padding: 0px;
          cursor: pointer;
          svg {
            color: var(--primary1);
          }
        }
      }
    }
  }
`;

export default Series;
