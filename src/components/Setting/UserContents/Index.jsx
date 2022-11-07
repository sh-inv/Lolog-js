import { useState, useEffect } from 'react';
import { MdEmail } from 'react-icons/md';
import { AiFillGithub, AiOutlineTwitter, AiFillFacebook, AiFillHome } from 'react-icons/ai';
import Button from '../../Button';
import EditButton from '../../EditButton';
import ConfirmModal from '../../ConfirmModal';
import Toggle from '../Toggle';
import styled from 'styled-components';
import { backgroundElement1, border1, border3, border4, text2, text3 } from '../../../styles/color';

const UserContents = () => {
  const [title, setTitle] = useState('');
  const [social, setSocial] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [isModifyTitle, setIsModifyTitle] = useState(false);
  const [isModifyContents, setIsModifyContents] = useState(false);

  const onModifyTitle = () => {
    isModifyTitle ? setIsModifyTitle(false) : setIsModifyTitle(true);
  };

  const onModifyContents = () => {
    isModifyContents ? setIsModifyContents(false) : setIsModifyContents(true);
  };

  const onModal = () => {
    //token 값 추가해야함
    setIsModal(true);
  };

  useEffect(() => {
    const contents = {
      title: 'my.log',
      social: { email: 'you8inpark@gmail.com', github: 'daydreamplace', twitter: 'eden', facebook: 'eden', url: 'dev-eden.shop' },
    };
    setTitle(contents.title);
    setSocial(contents.social);
  }, []);

  const getTitle = e => {
    setTitle(e.target.value);
  };

  const info = [
    {
      id: 1,
      icon: <MdEmail className='icon' />,
      placeholder: '이메일을 입력하세요.',
    },
    {
      id: 2,
      icon: <AiFillGithub className='icon' />,
      placeholder: 'Github 계정을 입력하세요.',
    },
    {
      id: 3,
      icon: <AiOutlineTwitter className='icon' />,
      placeholder: 'Twitter 계정을 입력하세요.',
    },
    {
      id: 4,
      icon: <AiFillFacebook className='icon' />,
      placeholder: 'http://www.facebook.com/',
    },
    {
      id: 5,
      icon: <AiFillHome className='icon' />,
      placeholder: '홈페이지 주소를 입력하세요.',
    },
  ];

  return (
    <>
      <UserContentsContainer>
        <div className='bottom-block'>
          <div className='wrapper'>
            <div className='title-wrapper'>
              <h3>벨로그 제목</h3>
            </div>
            <div className='interval'>
              {isModifyTitle ? (
                <>
                  <input className='modify-input modify-title' type='text' placeholder='벨로그 제목' onChange={getTitle} value={title} />
                  <Button
                    onClick={() => {
                      setIsModifyTitle(false);
                    }}
                    text='저장'
                    backgroundColor='#96F2D7'
                    color='#121212'
                  />
                </>
              ) : (
                <>
                  <div className='contents'>{title}</div>
                  <div className='edit-wrapper'>
                    <EditButton text='수정' onClick={onModifyTitle} />
                  </div>
                </>
              )}
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
              {isModifyContents ? (
                <>
                  <div className='contents'>
                    <ul>
                      {info.map(content => (
                        <li key={content.id}>
                          {content.icon}
                          <input className='modify-input' type='text' placeholder={content.placeholder} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    onClick={() => {
                      setIsModifyContents(false);
                    }}
                    text='저장'
                    className='confirm-button'
                  />
                </>
              ) : (
                <>
                  <div className='contents'>
                    <ul>
                      <li>
                        <MdEmail className='icon' />
                        <span>{social.email}</span>
                      </li>
                      <li>
                        <AiFillGithub className='icon' />
                        <span>{social.github}</span>
                      </li>
                      <li>
                        <AiOutlineTwitter className='icon' />
                        <span>{social.twitter}</span>
                      </li>
                      <li>
                        <AiFillFacebook className='icon' />
                        <span>{social.facebook}</span>
                      </li>
                      <li>
                        <AiFillHome className='icon' />
                        <span>{social.url}</span>
                      </li>
                    </ul>
                  </div>
                  <div className='edit-wrapper'>
                    <EditButton text='수정' onClick={onModifyContents} />
                  </div>
                </>
              )}
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
                  <Toggle />
                </li>
                <li>
                  <span className='alert'>벨로그 업데이트 소식</span>
                  <Toggle />
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
              <Button text='회원 탈퇴' backgroundColor='#FFC9C9' color='#121212' hoverBackground='#FFA8A8' onClick={onModal} />
            </div>
          </div>
          <div className='desc'>탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.</div>
        </div>
      </UserContentsContainer>
      {isModal && (
        <ConfirmModal
          title='회원탈퇴'
          message='정말로 탈퇴 하시겠습니까?'
          onClose={() => {
            setIsModal(false);
          }}
        />
      )}
    </>
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

          :focus {
            border: 1px solid ${border1};
          }
        }

        .confirm-button {
          background: #96f2d7;
          color: #121212;
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
