import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { apiClient } from '../../../../api';
import Toastify from '../../../../components/Toastify';
import Button from '../../../../components/Button';
import ConfirmModal from '../../../../components/ConfirmModal';

const Withdrawal = () => {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);

  const onModal = () => {
    setIsModal(true);
  };

  const onWithdrawal = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      const resp = await apiClient.delete('/users', config);
      console.log(resp.status);
      setIsModal(false);
      navigate('/');
      toast.success(`회원탈퇴가 완료되었습니다.`);
    } catch (error) {
      console.log(error);
    }
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
          onMove={onWithdrawal}
        />
      )}
      <Toastify />
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
