import ContentWrapper from '../ContentWrapper';
import { IoEarth } from 'react-icons/io5';
import { IoIosLock } from 'react-icons/io';
import styled from 'styled-components';

const SettingPublic = () => {
  return (
    <ContentWrapper contentTitle={'공개 설정'}>
      <SettingPublicContainer>
        <div className='btn-container'>
          <button className='public-btn'>
            <IoEarth className='icon' />
            전체 공개
          </button>
          <button className='private-btn'>
            <IoIosLock className='icon' />
            비공개
          </button>
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
      line-height: 1.125rem;
      font-size: 1.125rem;
      font-weight: bold;

      &:hover {
        opacity: 0.7;
        /* border: solid 1px var(--primary2); */
        /* color: var(--primary2); */
        cursor: pointer;
      }

      .icon {
        font-size: 1.6rem;
        margin-right: 2rem;
      }
    }

    button + button {
      margin-left: 1rem;
    }
  }
`;

export default SettingPublic;
