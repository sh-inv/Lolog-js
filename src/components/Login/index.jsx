import { useState } from 'react';
import LoginModal from './LoginModal';

const Login = ({ isLoginModal, setIsLoginModal }) => {
  const [isJoinModal, setIsJoinModal] = useState(false);

  return (
    <>
      {isLoginModal && (
        <LoginModal
          title='로그인'
          message='아직 회원이 아니신가요?'
          link='회원가입'
          onClose={() => {
            setIsLoginModal(false);
          }}
          onChange={() => {
            setIsLoginModal(false);
            setIsJoinModal(true);
          }}
        />
      )}
      {isJoinModal && (
        <LoginModal
          title='회원가입'
          message='계정이 이미 있으신가요?'
          link='로그인'
          onClose={() => {
            setIsJoinModal(false);
          }}
          onChange={() => {
            setIsJoinModal(false);
            setIsLoginModal(true);
          }}
        />
      )}
    </>
  );
};

export default Login;
