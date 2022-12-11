import { useState } from 'react';
import { apiClient } from '../../../../../../api';
import { toast } from 'react-toastify';
import Button from '../../../../../../components/Button';
import styled from 'styled-components';

const Create = ({ getSeriesList }) => {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [addSeriesValue, setAddSeriesValue] = useState('');

  const addSeries = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      const bodyData = {
        series_name: addSeriesValue,
      };
      await apiClient.post(`/series`, bodyData, config);
      getSeriesList();
      setIsInputOpen(false);
    } catch (error) {
      toast.error('시리즈 생성 실패');
      console.log(error);
    }
  };

  const closeAddSeries = () => {
    setIsInputOpen(false);
    setAddSeriesValue('');
  };

  return (
    <CreateContainer>
      <input className='url-create-input' type='text' placeholder='새로운 시리즈 이름을 입력하세요' onClick={() => setIsInputOpen(true)} value={addSeriesValue} onChange={e => setAddSeriesValue(e.target.value)} />
      {isInputOpen && (
        <div className='url-slug-wrapper'>
          <div className='url-slug-input-wrapper'>
            <span>{`/@userid/series/`}</span>
            <input className='url-slug-input' type='text' value={addSeriesValue} onChange={e => setAddSeriesValue(e.target.value)} />
          </div>
          <div className='btns'>
            <Button text='취소' color='transparent' onClick={closeAddSeries} />
            <Button text={'시리즈 추가'} color='teal' onClick={addSeries} />
          </div>
        </div>
      )}
    </CreateContainer>
  );
};

const CreateContainer = styled.div`
  padding: 1rem;
  background: var(--bg-element3);
  transition: all 0.125s ease-in 0s;

  .url-create-input {
    padding: 0.5rem;
    height: 2rem;
    width: 100%;
    box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
    outline: none;
    border: none;
    border-radius: 2px;
    background: var(--bg-element1);
    color: var(--text1);
    font-size: 0.875rem;
  }

  .url-slug-wrapper {
    margin-top: 0.5rem;

    .url-slug-input-wrapper {
      display: flex;
      padding: 0.5rem;
      width: 100%;
      height: 2rem;
      box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
      border-radius: 2px;
      background: var(--bg-element1);
      color: var(--text3);
      font-size: 0.75rem;

      span {
        padding-top: 0.16rem;
      }

      .url-slug-input {
        flex: 1 1 0%;
        padding-left: 0;
        outline: none;
        border: none;
        background: transparent;
        color: var(--text1);
        font-size: inherit;
      }
    }

    .btns {
      display: flex;
      -webkit-box-pack: end;
      justify-content: flex-end;
      margin-top: 0.5rem;
    }

    button + button {
      margin-left: 0.875rem;
    }
  }
`;

export default Create;
