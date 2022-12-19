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

  img {
    width: 25rem;
    height: auto;
    display: block;
    margin-bottom: 2rem;
  }

  .description {
    color: var(--text3);
    margin-bottom: 2rem;
    font-size: 2rem;
  }
`;

export default NoSeriesCard;
