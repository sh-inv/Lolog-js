// import { useState } from 'react';
// import AuthModal from '../AuthModal';
// import Join from '../Join';

// const Login = ({ isLoginModal, setIsLoginModal }) => {
//   const [isJoinModal, setIsJoinModal] = useState(false);

//   return (
//     <>
//       {isLoginModal && (
//         <AuthModal
//           title='로그인'
//           message='아직 회원이 아니신가요?'
//           link='회원가입'
//           onClose={() => {
//             setIsLoginModal(false);
//           }}
//           onChange={() => {
//             setIsLoginModal(false);
//             setIsJoinModal(true);
//           }}
//         />
//       )}
//       {isJoinModal && <Join setIsLoginModal={setIsLoginModal} setIsJoinModal={setIsJoinModal} />}
//     </>
//   );
// };

// export default Login;
