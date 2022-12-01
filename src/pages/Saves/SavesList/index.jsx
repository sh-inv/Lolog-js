import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { apiClient } from '../../../api';
import Saves from './Saves';
import ConfirmModal from '../../../components/ConfirmModal';
import Toastify from '../../../components/Toastify';

const SavesList = () => {
  const [list, setList] = useState([]);
  const [postId, setPostId] = useState();
  const [isModal, setIsModal] = useState(false);

  const getLoader = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MywibG9naW5faWQiOiJ0ZXN0VXNlciIsIm5hbWUiOiJFZGVuIn0sImlhdCI6MTY2OTg4NjkyN30.ZTqNucljut5WWZubG7k66Xdb7vsVX1cYhclYZs_1TOU` },
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
        headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MywibG9naW5faWQiOiJ0ZXN0VXNlciIsIm5hbWUiOiJFZGVuIn0sImlhdCI6MTY2OTg4NjkyN30.ZTqNucljut5WWZubG7k66Xdb7vsVX1cYhclYZs_1TOU` },
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

  return (
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
  );
};

const SavesListContainer = styled.div``;

export default SavesList;
