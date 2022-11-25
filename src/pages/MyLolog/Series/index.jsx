import { useState, useEffect } from 'react';
import SeriesList from './SeriesList';
import styled from 'styled-components';
import { SeriesMaxWidth768px } from '../../../styles/media';

const Series = () => {
  const [seriesList, setSeriesList] = useState([]);

  useEffect(() => {
    const seriesData = [
      {
        src: 'https://velog.velcdn.com/images/daydreamplace/post/80237a44-72d2-4fb9-9661-eabe22d60c0e/image.png',
        title: 'TIL',
        update: 'November 18, 2022 11:08:00',
      },
      {
        src: 'https://velog.velcdn.com/images/daydreamplace/post/247f0904-74f6-4fde-9132-b49f7256e71f/image.png',
        title: 'Javascript',
        update: 'April 16, 2022 11:08:00',
      },
      {
        src: 'https://velog.velcdn.com/images/daydreamplace/post/33f15afc-5b41-4f6d-9ed4-a7b53d7958a4/image.png',
        title: 'React',
        update: 'November 16, 2022 11:08:00',
      },
      {
        src: 'https://velog.velcdn.com/images/daydreamplace/post/80237a44-72d2-4fb9-9661-eabe22d60c0e/image.png',
        title: 'ddddd111111sssssssssssss1sssssdadasssssafadasss1ssssdsfsasssss',
        update: 'November 16, 2022 11:08:00',
      },
      {
        src: 'https://velog.velcdn.com/images/daydreamplace/post/5cff9b8b-c1a2-4a34-a637-1e21e7e0e417/image.png',
        title: '회고록',
        update: 'May 28, 2022 11:08:00',
      },
      {
        src: 'https://velog.velcdn.com/images/daydreamplace/post/80237a44-72d2-4fb9-9661-eabe22d60c0e/image.png',
        title: '회고록2',
        update: 'July 16, 2022 11:08:00',
      },
    ];

    setSeriesList(seriesData);
  }, []);

  return (
    <SeriesContainer>
      {seriesList.map(series => {
        return <SeriesList key={series.title} src={series.src} title={series.title} update={series.update} />;
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
