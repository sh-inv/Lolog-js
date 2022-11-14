import { useState } from 'react';
import Button from '../../../Button';
import ConfirmModal from '../../../ConfirmModal';
import styled from 'styled-components';
import { text2, buttonText, destructive1, destructive2 } from '../../../../styles/color';

const Withdrawal = () => {
  const [isModal, setIsModal] = useState(false);

  const onModal = () => {
    //token 값 추가해야함
    setIsModal(true);
  };

  return (
    <>
      <WithdrawalContainer>
        <Button text='회원 탈퇴' onClick={onModal} className='withdrawal-button' />
      </WithdrawalContainer>
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

const WithdrawalContainer = styled.div`
  flex: 1 1 0%;
  font-size: 1rem;
  color: ${text2};
  line-height: 1.5;

  .withdrawal-button {
    background: ${destructive1};
    color: ${buttonText};

    &:hover {
      background: ${destructive2};
    }
  }
`;

export default Withdrawal;
