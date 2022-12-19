import Create from './Create';
import SeriesList from './SeriesList';
import styled from 'styled-components';

const Setting = ({ seriesList, selectSeries, getSeriesList }) => {
  return (
    <SettingContainer>
      <Create getSeriesList={getSeriesList} />
      <SeriesList seriesList={seriesList} selectSeries={selectSeries} />
    </SettingContainer>
  );
};

const SettingContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  width: 100%;
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
  overflow: hidden;
`;

export default Setting;
