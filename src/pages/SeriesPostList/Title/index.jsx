import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setSeriesPostList } from '../../../store/modules/seriespostlist';

const Title = ({ isModify }) => {
  const { seriesPostList } = useSelector(state => state.seriesPostList);
  const dispatch = useDispatch();

  const getTitle = e => {
    console.log('2222', e.target.value);
    // dispatch(setSeriesPostList({ ...seriesPostList, series_name: e.target.value }));
  };

  console.log('1', seriesPostList[0]?.series_name);

  return isModify ? (
    <TitleModifyContainer>
      <input placeholder='시리즈 이름을 입력하세요.' name={seriesPostList[0]?.series_name} onChange={getTitle} value={seriesPostList[0]?.series_name} />
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
