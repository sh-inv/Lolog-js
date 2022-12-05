import styled from 'styled-components';
import nodata from '../../../../assets/nodata.png';

const NoSeriesCard = () => {
  return (
    <NoSeriesCardContainer>
      <img alt='시리즈 없음' src={nodata} />
      <div className='description'>시리즈가 없습니다.</div>
    </NoSeriesCardContainer>
  );
};

const NoSeriesCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  margin-top: 6rem;

  img {
    width: 25rem;
    height: auto;
    display: block;
    margin-bottom: 2rem;
  }

  .description {
    color: var(--text2);
    font-size: 1.5rem;
  }
`;

export default NoSeriesCard;
