import EditButton from '../../../../components/EditButton';
import styled from 'styled-components';

const Edit = () => {
  return (
    <EditContainer>
      <EditButton text='수정' className={'edit-button'} />
      <EditButton text='삭제' className={'edit-button'} />
    </EditContainer>
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
