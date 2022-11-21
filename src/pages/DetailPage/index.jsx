import styled from 'styled-components';
import CommentArea from './CommentArea';

const DetailPage = () => {
  return (
    <DetailPageContainer>
      <CommentArea />
    </DetailPageContainer>
  );
};

const DetailPageContainer = styled.div`
  width: 768px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0 1rem;
  }
`;

export default DetailPage;
