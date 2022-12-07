import { useEffect, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';

const PreNext = ({ postId, seriesData }) => {
  const [currentSort, setCurrentSort] = useState(0);

  useEffect(() => {
    if (seriesData) {
      const index = seriesData.findIndex(i => i.post_id === postId);
      setCurrentSort(index + 1);
    }
  }, [seriesData]);

  return (
    <PreNextContainer>
      <div className='location-number'>{`${currentSort}/${seriesData.length}`}</div>
      <div className='btn-wrapper'>
        <button className='pre'>
          <MdKeyboardArrowLeft />
        </button>
        <button className='next'>
          <MdKeyboardArrowRight />
        </button>
      </div>
    </PreNextContainer>
  );
};

const PreNextContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  .location-number {
    color: var(--text3);
    font-size: 0.875rem;
  }

  .btn-wrapper {
    display: flex;
    margin-left: 1.125rem;
    button {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      width: 1.5rem;
      height: 1.5rem;
      padding: 0px;
      outline: none;
      border: 1px solid var(--border4);
      border-radius: 50%;
      background: var(--bg-element1);
      color: var(--primary1);
      font-size: 1.25rem;
      cursor: pointer;

      svg {
        color: var(--primary1);
        pointer-events: none;
      }
    }
  }
`;

export default PreNext;
