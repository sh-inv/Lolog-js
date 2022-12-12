import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { apiClient } from '../../../api';
import Button from '../../../components/Button';
import EditButton from '../../../components/EditButton';
import ConfirmModal from '../../../components/ConfirmModal';
import Toastify from '../../../components/Toastify';

const Edit = ({ isModify, setIsModify, seriesName, userId }) => {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const { seriesPostList } = useSelector(state => state.seriesPostList);
  const seriesId = seriesPostList[0]?.series_id;

  const onModal = () => {
    setIsModal(true);
  };

  const onModify = async () => {
    setIsModify(true);
  };

  const modifyConfirm = async () => {
    try {
      let postIdList = [];
      let sortData = [];
      seriesPostList.map(postInfo => {
        postIdList.push(postInfo.post_id);
      });
      postIdList.map((postId, index) => {
        sortData.push({
          post_id: postId,
          sort: index + 1,
        });
      });
      const body = {
        series_name: seriesName,
        sort: sortData,
      };
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      await apiClient.patch(`series/${seriesId}`, body, config);
      setIsModify(false);
      toast.success('시리즈가 수정되었습니다.');
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      await apiClient.delete(`series/${seriesId}`, config);
      setIsModal(false);
      navigate(`/${userId}/series`);
      toast.success('시리즈가 삭제되었습니다.');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <EditContainer>
        {isModify ? (
          <Button text='적용' color='teal' onClick={modifyConfirm} />
        ) : (
          <>
            <EditButton text='수정' className={'edit-button'} onClick={onModify} />
            <EditButton text='삭제' className={'edit-button'} onClick={onModal} />
          </>
        )}
      </EditContainer>
      {isModal && (
        <ConfirmModal
          title='시리즈 삭제'
          message={`시리즈를 정말 삭제하시겠습니까?\n시리즈 안에 들어있는 포스트들은 삭제되지 않습니다.`}
          onClose={() => {
            setIsModal(false);
          }}
          onMove={onDelete}
        />
      )}
      <Toastify />
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
