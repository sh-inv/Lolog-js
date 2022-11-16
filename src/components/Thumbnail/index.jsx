import styled from 'styled-components';

const Thumbnail = () => {
  return <ThumbnailImage alt='thumbnail' src='https://velog.velcdn.com/images/daydreamplace/post/80237a44-72d2-4fb9-9661-eabe22d60c0e/image.png' />;
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
