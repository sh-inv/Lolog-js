import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { apiClient } from '../../../api';
import SeriesCard from './SeriesCard';
import { SeriesMaxWidth768px } from '../../../styles/media';

const Series = () => {
  const [seriesList, setSeriesList] = useState([]);

  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MywibG9naW5faWQiOiJ0ZXN0VXNlciIsIm5hbWUiOiLsnKDruYgifSwiaWF0IjoxNjcwMDg2NDMwfQ.DFFTbK0IfzSKiz38OxohQwcpO3p7zzNkV1GLvEQDjSY`;

  useEffect(() => {
    const loader = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await apiClient.get('/lolog/3/series', config);
        setSeriesList(data.series);
      } catch (error) {
        console.log(error);
      }
    };
    loader();
  }, []);

  return (
    <SeriesContainer>
      {seriesList.map(series => {
        return <SeriesCard seriesList={seriesList} key={series.series_id} src={series.post_thumbnail} title={series.series_series_name} update={series.series_create_at} postCount={series.post_count} />;
      })}
    </SeriesContainer>
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
