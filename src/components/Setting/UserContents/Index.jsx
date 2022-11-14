import { useState, useEffect } from 'react';
import Button from '../../Button';
import EditButton from '../../EditButton';
import Title from './Title';
import SocialInfo from './SocialInfo';
import Email from './Email';
import EmailReceiveSetting from './EmailReceiveSetting';
import Withdrawal from './Withdrawal';
import styled from 'styled-components';
import { backgroundElement1, border1, border3, border4, text2, text3, buttonText, primary1, primary2 } from '../../../styles/color';

const UserContents = () => {
  return (
    <UserContentsContainer>
      <div className='contents-box'>
        <div className='wrapper'>
          <div className='title-wrapper'>
            <h3>벨로그 제목</h3>
          </div>
          <div className='interval'>
            <Title />
          </div>
        </div>
        <div className='desc'>개인 페이지의 좌측 상단에 나타나는 페이지 제목입니다.</div>
      </div>
      <div className='contents-box border'>
        <div className='wrapper'>
          <div className='title-wrapper'>
            <h3>소셜 정보</h3>
          </div>
          <div className='interval'>
            <SocialInfo />
          </div>
        </div>
        <div className='desc'>포스트 및 블로그에서 보여지는 프로필에 공개되는 소셜 정보입니다.</div>
      </div>
      <div className='contents-box border'>
        <div className='wrapper'>
          <div className='title-wrapper'>
            <h3>이메일 주소</h3>
          </div>
          <Email />
        </div>
        <div className='desc'>회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.</div>
      </div>
      <div className='contents-box border'>
        <div className='wrapper'>
          <div className='title-wrapper'>
            <h3>이메일 수신 설정</h3>
          </div>
          <EmailReceiveSetting />
        </div>
      </div>
      <div className='contents-box border'>
        <div className='wrapper'>
          <div className='title-wrapper'>
            <h3>회원 탈퇴</h3>
          </div>
          <Withdrawal />
        </div>
        <div className='desc'>탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.</div>
      </div>
    </UserContentsContainer>
  );
};

const UserContentsContainer = styled.section`
  margin-top: 4rem;

  @media screen and (max-width: 768px) {
    margin-top: 0rem;
  }

  .border {
    border-top: 1px solid ${border4};
  }

  .contents-box {
    padding-top: 1rem;
    padding-bottom: 1rem;

    .wrapper {
      display: flex;

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }

      .title-wrapper {
        width: 9.5rem;
        flex-shrink: 0;

        h3 {
          margin: 0px;
          line-height: 1.5;
          font-size: 1.125rem;

          @media screen and (max-width: 768px) {
            margin-bottom: 0.5rem;
          }
        }
      }

      .interval {
        flex: 1 1 0%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
      }
    }

    .desc {
      margin-top: 0.875rem;
      color: ${text3};
      font-size: 0.875rem;
    }
  }
`;

export default UserContents;
