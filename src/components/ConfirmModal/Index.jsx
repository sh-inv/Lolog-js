import Button from '../Button';
import styled from 'styled-components';

const ConfirmModal = ({ title, message, onClose, onMove }) => {
  return (
    <>
      <Background />
      <Positioner>
        <ModalContainer>
          <div>
            <h3>{title}</h3>
            <p className='msg'>{message}</p>
            <div className='button'>
              <Button className='cancel' text='취소' onClick={onClose} />
              <Button className='confirm' text='확인' onClick={onMove} />
            </div>
          </div>
        </ModalContainer>
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
  z-index: 60;
`;

const ModalContainer = styled.div`
  width: 25rem;
  border-radius: 4px;
  background: var(--bg-element1);
  padding: 2rem 1.5rem;
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;
  animation: 0.4s ease-in-out 0s 1 normal forwards running cptskd;

  h3 {
    margin: 0px;
    font-size: 1.5rem;
    color: var(--text1);
    line-height: 1.5;
    font-weight: bold;
  }

  .msg {
    margin-top: 1rem;
    margin-bottom: 1rem;
    line-height: 1.5;
    font-size: 1rem;
    color: var(--text2);
    white-space: pre-wrap;
  }

  .button {
    display: flex;
    justify-content: flex-end;
    -webkit-box-pack: end;
    margin-top: 2rem;

    button {
      margin-left: 10px;
    }

    .cancel {
      background: none;
      color: var(--primary1);

      &:hover {
        background: var(--slight-layer);
      }
    }

    .confirm {
      background: var(--primary1);
      color: var(--button-text);

      &:hover {
        background: var(--primary2);
      }
    }
  }
`;

export default ConfirmModal;
