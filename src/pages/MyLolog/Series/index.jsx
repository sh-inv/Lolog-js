import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { apiClient } from '../../../api';
import SeriesCard from './SeriesCard';
import NoSeriesCard from './NoSeriesCard';
import { SeriesMaxWidth768px } from '../../../styles/media';

const Series = () => {
  const [seriesCardList, setSeriesCardList] = useState([]);
  const [isNoSeries, setIsNoSeries] = useState(false);

  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MTAsImxvZ2luX2lkIjoieW91YmlubiIsIm5hbWUiOiLsnKDruYgifSwiaWF0IjoxNjcwMjI2OTc2fQ.xygwAqXJ88Py_BXthd5JMZkxIeI_L96WgM7T4AGJCxA`;

  useEffect(() => {
    const loader = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await apiClient.get('/lolog/10/series', config);
        setSeriesCardList(data.series);
        !data.series.length && setIsNoSeries(true);
      } catch (error) {
        console.log(error);
      }
    };
    loader();
  }, []);

  return (
    <>
      {seriesCardList && !isNoSeries && (
        <SeriesContainer>
          {seriesCardList.map(series => {
            return <SeriesCard key={series.series_id} src={series.post_thumbnail} title={series.series_series_name} update={series.series_create_at} postCount={series.post_count} />;
          })}
        </SeriesContainer>
      )}
      {isNoSeries && <NoSeriesCard />}
    </>
  );
};

const SeriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -3rem;
  margin-left: -1rem;
  margin-right: -1rem;

  ${SeriesMaxWidth768px};
`;

export default Series;
