import SeriesPost from './SeriesPost';
import styled from 'styled-components';

const Series = () => {
  return (
    <SeriesContainer>
      <SeriesPost />
    </SeriesContainer>
  );
};

const SeriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -3rem;
  margin-left: -1rem;
  margin-right: -1rem;
`;

export default Series;
