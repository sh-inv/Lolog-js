import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { apiClient } from '../../../api';
import Saves from './Saves';
import NoSaves from './NoSaves';
import ConfirmModal from '../../../components/ConfirmModal';
import Toastify from '../../../components/Toastify';

const SavesList = () => {
  const [savesList, setSavesList] = useState([]);
  const [postId, setPostId] = useState();
  const [isModal, setIsModal] = useState(false);
  const [isNoSaves, setIsNoSaves] = useState(false);

  const getLoader = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      const { data } = await apiClient.get('/posts/saves', config);
      setSavesList(data.saves);
      !data.saves && setIsNoSaves(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLoader();
  }, []);

  const deletePost = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      await apiClient.delete(`/posts/${postId}`, config);
      setIsModal(false);
      toast.success('포스트가 삭제 되었습니다.');
      getLoader();
    } catch (error) {
      console.log(error);
    }
  };

  const onModal = () => {
    setIsModal(true);
  };

  return (
    <>
      {savesList && !isNoSaves && (
        <SavesListContainer>
          {savesList.map(saves => (
            <Saves key={saves.post_id} setPostId={setPostId} id={saves.post_id} title={saves.title} contents={saves.content} created_at={saves.create_at} onModal={onModal} />
          ))}
          {isModal && (
            <ConfirmModal
              title='임시 글 삭제'
              message={`임시 저장한 글을 삭제하시겠습니까?\n삭제한 글은 복구할 수 없습니다.`}
              onClose={() => {
                setIsModal(false);
              }}
              onMove={deletePost}
            />
          )}
          <Toastify />
        </SavesListContainer>
      )}
      {isNoSaves && <NoSaves />}
    </>
  );
};

const SavesListContainer = styled.div``;

export default SavesList;
