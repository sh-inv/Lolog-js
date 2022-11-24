import ContentWrapper from '../ContentWrapper';
import { MdPlaylistAdd } from 'react-icons/md';
import styled from 'styled-components';

const SettingSeries = () => {
  return (
    <ContentWrapper contentTitle={'시리즈 설정'}>
      <SettingSeriesContainer>
        <div className='add-series-container'>
          <div>
            <MdPlaylistAdd className='icon' />
            시리즈에 추가하기
          </div>
        </div>
      </SettingSeriesContainer>
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

export default SettingSeries;
