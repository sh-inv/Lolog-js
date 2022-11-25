import { useState } from 'react';
import Button from '../../../../components/Button';
import ConfirmModal from '../../../../components/ConfirmModal';
import styled from 'styled-components';

const Withdrawal = () => {
  const [isModal, setIsModal] = useState(false);

  const onModal = () => {
    //token 값 추가해야함
    setIsModal(true);
  };

  return (
    <>
      <WithdrawalContainer>
        <Button text='회원 탈퇴' className='withdrawal-button' color='red' onClick={onModal} />
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
  color: var(--text2);
  line-height: 1.5;
`;

export default Withdrawal;
