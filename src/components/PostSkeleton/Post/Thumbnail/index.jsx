import styled from 'styled-components';

const Thumbnail = ({ className }) => {
  return <ThumbnailBox className={className} />;
};

const ThumbnailBox = styled.div`
  height: 100%;
  background-color: var(--bg-element4);
`;

export default Thumbnail;
