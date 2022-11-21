import styled from 'styled-components';

const Thumbnail = ({ src, className }) => {
  return <>{src ? <ThumbnailImage alt='thumbnail' src={src} /> : <ThumbnailImage alt='thumbnail' src='https://static.velog.io/static/media/empty-thumbnail.78a8eb1e.svg' className={className} />}</>;
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
