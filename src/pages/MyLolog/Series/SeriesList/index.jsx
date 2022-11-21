import { Link } from 'react-router-dom';
import Thumbnail from '../../../../components/Thumbnail';
import SeriesInfo from './SeriesInfo';
import styled from 'styled-components';
import { SeriesPostMaxWidth768px } from '../../../../styles/media';

const SeriesList = ({ src, title, update }) => {
  return (
    <SeriesPostContainer>
      <ThumbnailContainer>
        <Link to={`${title}`}>
          <Thumbnail src={src} />
        </Link>
      </ThumbnailContainer>
      <SeriesInfo title={title} update={update} />
    </SeriesPostContainer>
  );
};

const SeriesPostContainer = styled.div`
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

export default SeriesList;
