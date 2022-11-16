import SeriesThumbnail from './SeriesThumbnail';
import SeriesInfo from './SeriesInfo';
import styled from 'styled-components';

const SeriesPost = () => {
  return (
    <SeriesPostContainer>
      <SeriesThumbnail />
      <SeriesInfo />
    </SeriesPostContainer>
  );
};

const SeriesPostContainer = styled.div`
  width: 50%;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 3rem;
`;

export default SeriesPost;
