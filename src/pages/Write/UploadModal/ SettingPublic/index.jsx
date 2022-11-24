import ContentWrapper from '../ContentWrapper';
import styled from 'styled-components';

const SettingPublic = () => {
  return (
    <ContentWrapper contentTitle={'공개 설정'}>
      <SettingPublicContainer>
        <div className='btn-container'>
          <button className='public-btn'>전체 공개</button>
          <button className='private-btn'>비공개</button>
        </div>
      </SettingPublicContainer>
    </ContentWrapper>
  );
};

const SettingPublicContainer = styled.div`
  .btn-container {
    display: flex;

    button {
      display: inline-flex;
      flex: 1 1 0%;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: start;
      justify-content: flex-start;
      height: 3rem;
      padding: 0px 0px 0px 1rem;
      outline: none;
      border: 1px solid transparent;
      border-radius: 4px;
      box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px 0px;
      background: var(--bg-element7);
      color: var(--text3);
      font-size: 1.125rem;
      font-weight: bold;

      &:hover {
        opacity: 0.7;
        /* border: solid 1px var(--primary2); */
        /* color: var(--primary2); */
        cursor: pointer;
      }
    }

    button + button {
      margin-left: 1rem;
    }
  }
`;

export default SettingPublic;
