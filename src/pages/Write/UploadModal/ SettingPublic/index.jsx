import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ContentWrapper from '../ContentWrapper';
import { IoEarth } from 'react-icons/io5';
import { IoIosLock } from 'react-icons/io';
import styled from 'styled-components';
import { setUploadType } from '../../../../store/modules/write';

const SettingPublic = () => {
  const [btnActive, setBtnActive] = useState([true, false]);
  const dispatch = useDispatch();

  const btnList = [
    {
      type: 'public-btn',
      icon: <IoEarth className='icon' />,
      text: '전체 공개',
      isActive: btnActive[0],
    },
    {
      type: 'private-btn',
      icon: <IoIosLock className='icon' />,
      text: '비공개',
      isActive: btnActive[1],
    },
  ];

  const changePublic = e => {
    const btnType = e.target.className;

    if (btnType === 'public-btn') {
      const changedActive = [true, false];
      setBtnActive(changedActive);
      dispatch(setUploadType('1'));
    } else {
      const changedActive = [false, true];
      setBtnActive(changedActive);
      dispatch(setUploadType('2'));
    }
  };

  return (
    <ContentWrapper contentTitle={'공개 설정'}>
      <SettingPublicContainer>
        <div className='btn-container'>
          {btnList.map(btn => {
            return (
              <button key={btn.type} className={btn.isActive ? `${btn.type} active` : btn.type} onClick={changePublic}>
                {btn.icon}
                {btn.text}
              </button>
            );
          })}
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
        cursor: pointer;
      }

      .icon {
        font-size: 1.6rem;
        margin-right: 2rem;
        pointer-events: none;
      }
    }
    .active {
      border: solid 1px var(--primary2);
      color: var(--primary2);

      &:hover {
        opacity: 1;
      }
    }

    button + button {
      margin-left: 1rem;
    }
  }
`;

export default SettingPublic;
