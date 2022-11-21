import thumbnail from '../../assets/thumbnail.png';
import styled from 'styled-components';

const Thumbnail = ({ src }) => {
  return <ThumbnailImage alt='thumbnail' src={src ? src : thumbnail} />;
};

const ThumbnailImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export default Thumbnail;
