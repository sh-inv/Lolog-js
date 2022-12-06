import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSeriesList } from '../../../../store/modules/write';
import ContentWrapper from '../ContentWrapper';
import { MdPlaylistAdd } from 'react-icons/md';
import styled from 'styled-components';

const SettingSeries = () => {
  const { isSeriesList } = useSelector(state => state.writeContent);
  const dispatch = useDispatch();

  const getSeriesList = async () => {
    try {
      const config = {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MywibG9naW5faWQiOiJ0ZXN0VXNlciIsIm5hbWUiOiLsnKDruYgifSwiaWF0IjoxNjcwMzMzNzUyfQ.X6dn8fdrkbsTxcno9k1r_IZEZNTD_t20vFo_VNMGbjU',
        },
      };
      const { data } = await axios.get(`http://localhost:8000/series`, config);
      dispatch(setIsSeriesList(true));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContentWrapper contentTitle={'시리즈 설정'}>
      {isSeriesList ? (
        <SettingSeriesContainerActive>
          <div className='input-wrapper'>
            <form>
              <input type='text' placeholder='새로운 시리즈 이름을 입력하세요' />
            </form>
          </div>
          <ul className='series-list'></ul>
        </SettingSeriesContainerActive>
      ) : (
        <SettingSeriesContainer>
          <div className='add-series-container' onClick={getSeriesList}>
            <div>
              <MdPlaylistAdd className='icon' />
              시리즈에 추가하기
            </div>
          </div>
        </SettingSeriesContainer>
      )}
    </ContentWrapper>
  );
};

const SettingSeriesContainer = styled.div`
  .add-series-container {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px 0px;
    outline: none;
    border: none;
    border-radius: 4px;
    background: var(--bg-element7);
    color: var(--primary2);
    font-size: 1.125rem;
    font-weight: 600;

    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }

    div {
      display: flex;
      flex: 1 1 0%;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      .icon {
        font-size: 1.6rem;
        margin-right: 1rem;
      }
    }
  }
`;

const SettingSeriesContainerActive = styled.div`
  display: flex;
  width: 100%;
  flex: 1 1 0%;
  flex-direction: column;
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
  overflow: hidden;

  form {
    background: var(--bg-element3);
    padding: 1rem;
    height: 4rem;
    transition: all 0.125s ease-in 0s;
    input {
      height: 2rem;
      width: 100%;
      padding: 0.5rem;
      font-size: 0.875rem;
      border-radius: 2px;
      border: none;
      outline: none;
      box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
      background: var(--bg-element1);
      color: var(--text1);
    }
  }
  ul {
    height: 16.5625rem;
    overflow-y: auto;
    padding-left: 0px;
    list-style: none;
    margin: 0px;
    background: var(--bg-element7);
  }
`;

export default SettingSeries;
