import { useState, useCallback, useEffect } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import SocialAuth from './SocialAuth';
import welcome from '../../assets/welcome.png';
import styled from 'styled-components';

const AuthModal = ({ isLoginModal, setIsLoginModal, title }) => {
  const [isSignInModal, setIsSignInModal] = useState(false);

  const onClose = useCallback(() => {
    setIsLoginModal(false);
  }, [isLoginModal]);

  return (
    <>
      <Background />
      <Positioner>
        <LoginContainer>
          <div className='left-block'>
            <img alt='welcome' src={welcome} />
            <div className='welcome'>환영합니다!</div>
          </div>
          <div className='right-block'>
            <div className='exit'>
              <MdOutlineClose className='icon' onClick={() => setIsLoginModal(false)} />
            </div>
            <div className='wrapper'>
              <h2>{isSignInModal ? '회원가입' : '로그인'}</h2>
              <section>
                <h4>이메일로 {isLoginModal ? '로그인' : '회원가입'}</h4>
                {isSignInModal ? <SignUpForm title={title} isSignInModal={isSignInModal} /> : <LoginForm title={title} isSignInModal={isSignInModal} onClose={onClose} />}
              </section>
              <section>
                <h4>소셜 계정으로 {isSignInModal ? '회원가입' : '로그인'}</h4>
                <SocialAuth />
              </section>
            </div>
            <div className='foot'>
              <span>{isSignInModal ? '계정이 이미 있으신가요?' : '아직 회원이 아니신가요?'}</span>
              <div
                className='link'
                onClick={() => {
                  setIsSignInModal(!isSignInModal);
                }}
                tabIndex='8'
              >
                {isSignInModal ? '로그인' : '회원가입'}
              </div>
            </div>
          </div>
        </LoginContainer>
      </Positioner>
    </>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: var(--opaque-layer);
  z-index: 10;
  animation: 0.25s ease 0s 1 normal forwards running cJoqxJ;
`;

const Positioner = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 20;
`;

const LoginContainer = styled.div`
  display: flex;
  width: 606px;
  height: 530px;
  animation: 0.4s ease-in-out 0s 1 normal forwards running cptskd;
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;

  @media screen and (max-width: 768px) {
    flex: 1 1 0%;
    width: auto;
    height: 100%;
  }

  .left-block {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 216px;
    padding: 1.5rem;
    background: var(--bg-element2);

    @media screen and (max-width: 768px) {
      display: none;
    }

    img {
      width: 100%;
      height: auto;
      display: block;
    }

    .welcome {
      margin-top: 1.5rem;
      color: var(--text2);
      text-align: center;
      font-weight: 600;
      font-size: 1.75rem;
    }
  }

  .right-block {
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background: var(--bg-page2);

    .exit {
      display: flex;
      -webkit-box-pack: end;
      justify-content: flex-end;
      margin-bottom: 2.25rem;
      font-size: 1.5rem;
      color: var(--text3);
      cursor: pointer;
    }

    .wrapper {
      flex: 1 1 0%;
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 1.3125rem;
        color: var(--text1);
      }

      section {
        display: block;

        h4 {
          margin-top: 1rem;
          margin-bottom: 1rem;
          color: var(--text3);
        }
      }

      section + section {
        margin-top: 1.5rem;
      }
    }

    .foot {
      text-align: right;

      span {
        margin-right: 0.25rem;
      }

      .link {
        display: inline-block;
        font-weight: bold;
        color: var(--primary1);
        cursor: pointer;
      }
    }
  }
`;

export default AuthModal;
