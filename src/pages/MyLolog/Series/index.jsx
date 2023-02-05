import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { apiClient } from '../../../api';
import SeriesCard from './SeriesCard';
import NoSeriesCard from './NoSeriesCard';
import { SeriesMaxWidth768px } from '../../../styles/media';

const Series = () => {
  const [seriesCardList, setSeriesCardList] = useState([]);
  const [isNoSeries, setIsNoSeries] = useState(false);
  const { user } = useSelector(state => state.myLologData);

  useEffect(() => {
    const loader = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        };
        const { data } = await apiClient.get(`series/${user.id}`, config);
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
            return <SeriesCard key={series.series_id} seriesId={series.series_id} src={series.series_thumbnail} title={series.series_series_name} update={series.series_update_at} postCount={series.series_post_count} />;
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
