import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Title = ({ isModify, seriesName, setSeriesName }) => {
  const { seriesPostList } = useSelector(state => state.seriesPostList);

  const getTitle = e => {
    setSeriesName(e.target.value);
  };

  return isModify ? (
    <TitleModifyContainer>
      <input placeholder='시리즈 이름을 입력하세요.' onChange={getTitle} value={seriesName} />
    </TitleModifyContainer>
  ) : (
    <TitleContainer>{seriesPostList[0]?.series_name}</TitleContainer>
  );
};

const TitleContainer = styled.h1`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  color: var(--text1);
  letter-spacing: -0.004em;
  line-height: 1.5;
  font-size: 2.5rem;
  outline: none;
  overflow: hidden;
`;

const TitleModifyContainer = styled.div`
  input {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    border: none;
    color: var(--text1);
    letter-spacing: -0.004em;
    line-height: 1.5;
    font-weight: 600;
    font-size: 2.5rem;
    outline: none;
    overflow: hidden;
  }
`;

export default Title;
