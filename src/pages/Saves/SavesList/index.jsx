import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { apiClient } from '../../../api';
import Saves from './Saves';
import NoSaves from './NoSaves';
import ConfirmModal from '../../../components/ConfirmModal';
import Toastify from '../../../components/Toastify';

const SavesList = () => {
  const [list, setList] = useState([]);
  const [postId, setPostId] = useState();
  const [isModal, setIsModal] = useState(false);

  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MTAsImxvZ2luX2lkIjoieW91YmlubiIsIm5hbWUiOiLsnKDruYgifSwiaWF0IjoxNjcwMjI2OTc2fQ.xygwAqXJ88Py_BXthd5JMZkxIeI_L96WgM7T4AGJCxA`;

  const getLoader = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data } = await apiClient.get('/posts/saves', config);
      setList(data.saves);
    } catch (error) {
      console.log(error);
      setList(null);
    }
  };

  useEffect(() => {
    getLoader();
  }, []);

  const deletePost = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await apiClient.delete(`/posts/${postId}?status=3`, config);
      setIsModal(false);
      toast.success('포스트가 삭제 되었습니다.');
      getLoader();
    } catch (error) {
      toast.error(error);
    }
  };

  const onModal = () => {
    setIsModal(true);
  };

  return Array.isArray(list) && list.length ? (
    <>
      <SavesListContainer>
        {list.map(saves => (
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
      </SavesListContainer>
      <Toastify />
    </>
  ) : (
    <NoSaves />
  );
};

const SavesListContainer = styled.div``;

export default SavesList;
