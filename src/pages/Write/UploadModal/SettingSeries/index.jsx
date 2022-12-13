import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWriteContent } from '../../../../store/modules/write';
import { apiClient } from '../../../../api';
import { toast } from 'react-toastify';
import Toastify from '../../../../components/Toastify';
import ContentWrapper from '../ContentWrapper';
import Setting from './Setting';
import After from './After';
import Before from './Before';
import styled from 'styled-components';

const SettingSeries = () => {
  const [seriesList, setSeriesList] = useState([]);
  const [seriesName, setSeriesName] = useState('');
  const { isSeriesList, seriesId } = useSelector(state => state.writeContent);
  const dispatch = useDispatch();

  useEffect(() => {
    const initialSetting = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        };
        const { data } = await apiClient.get(`/series`, config);
        data.series.map(seriesInfo => {
          if (seriesInfo.series_id === seriesId) {
            setSeriesName(seriesInfo.series_series_name);
          }
        });
      } catch (error) {
        toast.error('시리즈 불러오기 실패');
        console.log('uploadModal series initial setting error =>', error);
      }
    };

    initialSetting();
  }, []);

  const getSeriesList = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      const { data } = await apiClient.get(`/series`, config);
      dispatch(setWriteContent({ type: 'isSeriesList', value: true }));
      setSeriesList(data.series);
    } catch (error) {
      toast.error('시리즈 불러오기 실패');
      console.log('uploadModal series error =>', error);
    }
  };

  const selectSeries = e => {
    dispatch(setWriteContent({ type: 'seriesId', value: Number(e.target.id) }));
    setSeriesName(e.target.innerText);
  };

  const removeSeries = () => {
    dispatch(setWriteContent({ type: 'seriesId', value: null }));
  };

  useEffect(() => {
    return () => {
      dispatch(setWriteContent({ type: 'isSeriesList', value: false }));
    };
  }, []);

  return (
    <ContentWrapper contentTitle={'시리즈 설정'}>
      <SettingSeriesContainer>
        {isSeriesList ? (
          <Setting getSeriesList={getSeriesList} seriesList={seriesList} selectSeries={selectSeries} />
        ) : (
          <div className='view-box'>{seriesId ? <After seriesName={seriesName} getSeriesList={getSeriesList} removeSeries={removeSeries} /> : <Before getSeriesList={getSeriesList} />}</div>
        )}
      </SettingSeriesContainer>
      <Toastify />
    </ContentWrapper>
  );
};

const SettingSeriesContainer = styled.div`
  .view-box {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px 0px;
    outline: none;
    border: none;
    border-radius: 4px;
    background: var(--bg-element7);
  }
`;

export default SettingSeries;
