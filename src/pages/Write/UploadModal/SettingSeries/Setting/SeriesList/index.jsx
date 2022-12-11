import { useSelector } from 'react-redux';
import styled from 'styled-components';

const SeriesList = ({ seriesList, selectSeries }) => {
  const { seriesId } = useSelector(state => state.writeContent);

  return (
    <SeriesListContainer>
      <ul className='series-list'>
        {seriesList.map(seriesInfo => {
          return (
            <li key={seriesInfo.series_series_name} className={seriesInfo.series_id === seriesId ? 'active' : ''} id={seriesInfo.series_id} onClick={selectSeries}>
              {seriesInfo.series_series_name}
            </li>
          );
        })}
      </ul>
    </SeriesListContainer>
  );
};

const SeriesListContainer = styled.div`
  ul {
    margin: 0px;
    height: 16.5625rem;
    padding-left: 0px;
    background: var(--bg-element7);
    list-style: none;
    overflow-y: auto;

    li {
      padding: 1rem;
      border-bottom: 1px solid var(--border3);
      cursor: pointer;
    }

    .active {
      background: var(--primary1);
      color: var(--button-text);
    }
  }
`;

export default SeriesList;
