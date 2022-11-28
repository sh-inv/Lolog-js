import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const Toastify = () => {
  return <Toast position='top-right' autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss pauseOnHover theme='colored' />;
};

const Toast = styled(ToastContainer)`
  .Toastify__toast {
    margin-bottom: 0;
    border-radius: 0;
  }
`;

export default Toastify;
