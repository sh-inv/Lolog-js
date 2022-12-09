import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { apiClient } from '../../../api';
import SeriesCard from './SeriesCard';
import NoSeriesCard from './NoSeriesCard';
import { SeriesMaxWidth768px } from '../../../styles/media';

const Series = () => {
  const [seriesCardList, setSeriesCardList] = useState([]);

  useEffect(() => {
    const loader = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        };
        const { data } = await apiClient.get('/series/3', config);
        console.log(data);
        setSeriesCardList(data.series);
      } catch (error) {
        console.log(error);
      }
    };
    loader();
  }, []);

  return Array.isArray(seriesCardList) && seriesCardList.length > 0 ? (
    <SeriesContainer>
      {seriesCardList.map(series => {
        return <SeriesCard key={series.series_id} src={series.post_thumbnail} title={series.series_series_name} update={series.series_update_at} postCount={series.post_count} />;
      })}
    </SeriesContainer>
  ) : (
    <NoSeriesCard />
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
