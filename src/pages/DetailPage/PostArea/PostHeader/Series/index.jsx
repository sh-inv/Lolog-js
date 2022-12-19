import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ImBookmark } from 'react-icons/im';
import RouterList from './RouterList';
import ListToggle from './ListToggle';
import PreNext from './PreNext';
import styled from 'styled-components';

const Series = () => {
  const { postData } = useSelector(state => state.detailData);
  const [isToggle, setIsToggle] = useState(false);
  const seriesTitle = postData.series[0].series_name;

  return (
    postData.series && (
      <SeriesContainer className='series-container'>
        <h2>
          <a href=''>{seriesTitle}</a>
        </h2>
        <div className='bookmark-icon-positioner'>
          <ImBookmark />
        </div>
        {isToggle && <RouterList />}
        <div className='series-btns'>
          <ListToggle isToggle={isToggle} setIsToggle={setIsToggle} />
          <PreNext />
        </div>
      </SeriesContainer>
    )
  );
};

const SeriesContainer = styled.div`
  position: relative;
  margin-top: 2rem;
  padding: 2rem 1.5rem;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 6%) 0px 0px 4px 0px;
  background: var(--bg-element2);

  .bookmark-icon-positioner {
    position: absolute;
    top: 0px;
    right: 1.5rem;
    color: var(--primary1);
    font-size: 52px;
  }

  .series-btns {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 3rem;
  }
`;

export default Series;
