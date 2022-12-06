import { useState } from 'react';
import { ImBookmark } from 'react-icons/im';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';

const Series = ({ seriesData }) => {
  const [isToggle, setIsToggle] = useState(false);

  const changeToggle = e => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      {seriesData && (
        <SeriesContainer>
          <h2>
            <a href=''>series-title</a>
          </h2>
          <div className='bookmark-icon'>
            <ImBookmark />
          </div>
          {isToggle && (
            <ol className='series-list'>
              <li>
                <a href=''>series1</a>
              </li>
              <li>
                <a href=''>series2</a>
              </li>
              <li>
                <a href='' style={{ color: 'var(--primary1)', fontWeight: 'bold' }}>
                  series3
                </a>
              </li>
            </ol>
          )}
          <div className='series-list-router'>
            <div className='list-route-toggle' onClick={changeToggle}>
              {isToggle ? <VscTriangleUp className='arrow-icon' /> : <VscTriangleDown className='arrow-icon' />}
              {isToggle ? '숨기기' : '목록 보기'}
            </div>
            <div className='list-route-btn'>
              <div className='series-number'>6/6</div>
              <div className='btn-wrapper'>
                <button className='pre'>
                  <MdKeyboardArrowLeft />
                </button>
                <button className='next'>
                  <MdKeyboardArrowRight />
                </button>
              </div>
            </div>
          </div>
        </SeriesContainer>
      )}
    </>
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
    font-size: 52px;
    color: var(--primary1);
  }
  .series-list {
    padding-left: 0px;
    margin: 16px 0;
    line-height: 1.8;
    font-size: 1rem;
    color: var(--text2);
    counter-reset: item 0;
    li::before {
      content: counter(item) '. ';
      counter-increment: item 1;
      color: var(--text3);
      font-style: italic;
      margin-right: 0.25rem;
      pointer-events: none;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .series-list-router {
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
        margin-right: 0.7rem;
        color: var(--text1);
        font-size: 0.8rem;
        pointer-events: none;
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
