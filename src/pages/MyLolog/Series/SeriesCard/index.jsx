import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Thumbnail from '../../../../components/Thumbnail';
import SeriesInfo from './SeriesInfo';
import { SeriesPostMaxWidth768px } from '../../../../styles/media';

const SeriesCard = ({ seriesId, src, title, update, postCount }) => {
  return (
    <SeriesCardContainer>
      <ThumbnailContainer>
        <Link to={`${seriesId}`}>
          <Thumbnail src={src} />
        </Link>
      </ThumbnailContainer>
      <SeriesInfo title={title} update={update} postCount={postCount} />
    </SeriesCardContainer>
  );
};

const SeriesCardContainer = styled.div`
  width: 50%;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 3rem;

  ${SeriesPostMaxWidth768px};
`;

const ThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 52.6316%;
`;

export default SeriesCard;
