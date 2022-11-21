import { useState } from 'react';
import EditButton from '../../../../components/EditButton';
import ConfirmModal from '../../../../components/ConfirmModal';
import styled from 'styled-components';

const Edit = () => {
  const [isModal, setIsModal] = useState(false);

  const onModal = () => {
    setIsModal(true);
  };

  return (
    <>
      <EditContainer>
        <EditButton text='수정' className={'edit-button'} />
        <EditButton text='삭제' className={'edit-button'} onClick={onModal} />
      </EditContainer>
      {isModal && (
        <ConfirmModal
          title='시리즈 삭제'
          message={`시리즈를 정말 삭제하시겠습니까?\n시리즈 안에 들어있는 포스트들은 삭제되지 않습니다.`}
          onClose={() => {
            setIsModal(false);
          }}
        />
      )}
    </>
  );
};

const EditContainer = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  align-items: center;
  height: 2rem;

  .edit-button {
    color: var(--text3);
    text-decoration: none;

    &:hover {
      color: var(--text1);
    }
  }

  .edit-button + .edit-button {
    margin-left: 0.5rem;
  }
`;

export default Edit;
