import Thumbnail from '../../../Thumbnail';
import styled from 'styled-components';

const SeriesThumbnail = () => {
  return (
    <ThumbnailContainer>
      <Thumbnail />
    </ThumbnailContainer>
  );
};

const ThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 52.6316%;
`;

export default SeriesThumbnail;
