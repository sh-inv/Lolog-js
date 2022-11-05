import Button from '../Button/Index';
import styled from 'styled-components';
import { backgroundElement1, text1, text2, opaqueLayer } from '../../styles/color';

const ConfirmModal = ({ visible, title, message, onClose }) => {
  if (!visible) return null;
  return (
    <>
      <Background />
      <Modal>
        <ModalContainer>
          <div>
            <h3>{title}</h3>
            <div className='msg'>{message}</div>
            <Button text='취소' onClick={onClose} />
            <Button text='확인' onClick={onClose} />
          </div>
        </ModalContainer>
      </Modal>
    </>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: ${opaqueLayer};
  z-index: 10;
  animation: 0.25s ease 0s 1 normal forwards running cJoqxJ;
`;

const Modal = styled.div`
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
  z-index: 60;
`;

const ModalContainer = styled.div`
  width: 25rem;
  border-radius: 4px;
  background: ${backgroundElement1};
  padding: 2rem 1.5rem;
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;
  animation: 0.4s ease-in-out 0s 1 normal forwards running cptskd;

  h3 {
    margin: 0px;
    font-size: 1.5rem;
    color: ${text1};
    line-height: 1.5;
    font-weight: bold;
  }

  .msg {
    margin-top: 1rem;
    margin-bottom: 1rem;
    line-height: 1.5;
    font-size: 1rem;
    color: ${text2};
    white-space: pre-wrap;
  }
`;

export default ConfirmModal;
