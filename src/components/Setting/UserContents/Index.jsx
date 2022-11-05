import { useState, useEffect } from 'react';
import { MdEmail } from 'react-icons/md';
import { AiFillGithub, AiOutlineTwitter, AiFillFacebook, AiFillHome } from 'react-icons/ai';
import Button from '../../Button/Index';
import ModifyButton from '../ModifyButton/Index';
import styled from 'styled-components';
import { backgroundElement1, backgroundElement9, border3, border4, text2, text3, primary2 } from '../../../styles/color';

const UserContents = ({ modify, setModify, onModify }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    const contents = {
      title: 'my.log',
      social: [
        {
          email: 'you8inpark@gmail.com',
        },
        { github: 'daydreamplace' },
        { twitter: 'eden' },
        { facebook: 'eden' },
        { home: 'dev-eden.shop' },
      ],
    };

    setTitle(contents.title);
  }, []);

  const getTitle = e => {
    setTitle(e.target.value);
  };

  return (
    <UserContentsContainer>
      <div className='bottom-block'>
        <div className='wrapper'>
          <div className='title-wrapper'>
            <h3>벨로그 제목</h3>
          </div>
          <div className='interval'>
            {modify ? <input className='modify-input modify-title' type='text' onChange={getTitle} value={title} /> : <div className='contents'>daydream.log</div>}
            <div className='edit-wrapper'>
              <ModifyButton onModify={onModify} />
            </div>
          </div>
        </div>
        <div className='desc'>개인 페이지의 좌측 상단에 나타나는 페이지 제목입니다.</div>
      </div>
      <div className='bottom-block border'>
        <div className='wrapper'>
          <div className='title-wrapper'>
            <h3>소셜 정보</h3>
          </div>
          <div className='interval'>
            <div className='contents'>
              <ul>
                <li>
                  <MdEmail className='icon' />
                  <span>you8inpark@gmail.com</span>
                </li>
                <li>
                  <AiFillGithub className='icon' />
                  <span>daydreamplace</span>
                </li>
                <li>
                  <AiOutlineTwitter className='icon' />
                  <span>eden</span>
                </li>
                <li>
                  <AiFillFacebook className='icon' />
                  <span>eden</span>
                </li>
                <li>
                  <AiFillHome className='icon' />
                  <span>dev-eden.shop</span>
                </li>
              </ul>
            </div>
            <div className='edit-wrapper'>
              <ModifyButton onModify={onModify} />
            </div>
          </div>
        </div>
        <div className='desc'>포스트 및 블로그에서 보여지는 프로필에 공개되는 소셜 정보입니다.</div>
      </div>
      <div className='bottom-block border'>
        <div className='wrapper'>
          <div className='title-wrapper'>
            <h3>이메일 주소</h3>
          </div>
          <div className='contents'>you8inpark@gmail.com</div>
        </div>
        <div className='desc'>회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.</div>
      </div>
      <div className='bottom-block border'>
        <div className='wrapper'>
          <div className='title-wrapper'>
            <h3>이메일 수신 설정</h3>
          </div>
          <div className='contents'>
            <ul>
              <li>
                <span className='alert'>댓글 알림</span>
                <div className='toggle-off'>
                  <div className='circle' />
                </div>
              </li>
              <li>
                <span className='alert'>벨로그 업데이트 소식</span>
                <div className='toggle'>
                  <div className='circle' />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bottom-block  border'>
        <div className='wrapper'>
          <div className='title-wrapper'>
            <h3>회원 탈퇴</h3>
          </div>
          <div className='contents'>
            <Button text='회원 탈퇴' backgroundColor='#FF6B6B' color='#fff' />
          </div>
        </div>
        <div className='desc'>탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.</div>
      </div>
    </UserContentsContainer>
  );
};

const UserContentsContainer = styled.section`
  margin-top: 4rem;

  .bottom-block {
    padding-top: 1rem;
    padding-bottom: 1rem;

    .wrapper {
      display: flex;

      .title-wrapper {
        width: 9.5rem;
        flex-shrink: 0;

        h3 {
          margin: 0px;
          line-height: 1.5;
          font-size: 1.125rem;
        }
      }

      .interval {
        flex: 1 1 0%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;

        .modify-input {
          flex: 1 1 0%;
          display: block;
          padding: 0.5rem;
          margin-right: 1rem;

          border: 1px solid ${border3};
          border-radius: 4px;
          background: ${backgroundElement1};
          color: ${text2};
          font-size: 1rem;
          line-height: 1rem;
          outline: none;
        }

        .edit-wrapper {
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          margin-left: 1rem;
        }
      }

      .contents {
        flex: 1 1 0%;
        font-size: 1rem;
        color: ${text2};
        line-height: 1.5;

        ul {
          list-style: none;
          padding: 0px;
          margin: 0px;

          li {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            margin-bottom: 0.5rem;

            .icon {
              width: 1rem;
              height: 1rem;
              font-size: 1rem;
              margin-right: 0.5rem;
              flex-shrink: 0;
            }

            span {
              font-size: 1rem;
            }

            .alert {
              width: 14rem;
            }

            .toggle {
              cursor: pointer;
              display: flex;
              -webkit-box-align: center;
              align-items: center;
              width: 2.875rem;
              height: 1.5rem;
              padding: 0.125rem;

              border-radius: 1.125rem;

              background: ${primary2};
              transition: all 0.125s ease-in 0s;

              .circle {
                width: 1.25rem;
                height: 1.25rem;
                transform: translate(1.375rem);

                border-radius: 0.625rem;
                background: ${backgroundElement1};
                box-shadow: rgb(0 0 0 / 10%) -2px 0px 4px;
              }
            }

            .toggle-off {
              cursor: pointer;
              display: flex;
              -webkit-box-align: center;
              align-items: center;
              width: 2.875rem;
              height: 1.5rem;
              padding: 0.125rem;

              border-radius: 1.125rem;

              background: ${backgroundElement9};
              transition: all 0.125s ease-in 0s;

              .circle {
                width: 1.25rem;
                height: 1.25rem;

                border-radius: 0.625rem;
                background: ${backgroundElement1};
              }
            }
          }
        }
      }
    }

    .desc {
      margin-top: 0.875rem;
      color: ${text3};
      font-size: 0.875rem;
    }
  }

  .border {
    border-top: 1px solid ${border4};
  }
`;

export default UserContents;
