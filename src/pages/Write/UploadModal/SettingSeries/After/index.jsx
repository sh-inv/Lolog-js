import { AiTwotoneSetting } from 'react-icons/ai';
import styled from 'styled-components';

const After = ({ seriesName, getSeriesList, removeSeries }) => {
  return (
    <AfterContainer>
      <span>{seriesName}</span>
      <div className='setting-btn' onClick={getSeriesList}>
        <AiTwotoneSetting />
      </div>
      <p className='remove-btn' onClick={removeSeries}>
        시리즈에서 제거
      </p>
    </AfterContainer>
  );
};

const AfterContainer = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  padding-left: 1rem;
  width: 100%;
  height: 100%;
  color: var(--text1);

  .setting-btn {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-left: auto;
    width: 48px;
    height: 100%;
    background: var(--primary1);
    color: var(--bg-page2);
    font-size: 1.5rem;

    &:hover {
      background: var(--primary2);
      cursor: pointer;
    }
  }

  .remove-btn {
    position: absolute;
    top: 3rem;
    right: 0;
    margin-left: auto;
    margin-top: 0.7rem;
    color: var(--destructive2);
    cursor: pointer;
  }
`;

export default After;
