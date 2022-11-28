import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setIsUploadModal } from '../../../../store/modules/write';
import Button from '../../../../components/Button';
import Toastify from '../../../../components/Toastify';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const ModalBtns = () => {
  const { title, content, thumbnail, uploadType } = useSelector(state => state.writeContent);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onUpload = async () => {
    if (title && content) {
      try {
        const config = {
          headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MywibG9naW5faWQiOiJ0ZXN0VXNlciIsIm5hbWUiOiLthYzsiqTtirgifSwiaWF0IjoxNjY5NjMwNjE5fQ.qPQNhe2qVb8VMnrlxueDGBFHYkOkfwrZCiENYXevp4I` },
        };
        const bodyData = { title: title, content: 'content', thumbnail: thumbnail, tags: [], series_id: 0 };
        const response = await axios.post(`http://localhost:8000/posts?status=${uploadType}`, bodyData, config);

        if (response.data.message === 'post create success') {
          navigate(`/@${response.data.post.post[0].login_id}/${response.data.post.post[0].title}`);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error('제목 또는 내용이 비어있습니다.');
    }
  };

  useEffect(() => {
    return () => {
      dispatch(setIsUploadModal(false));
    };
  }, []);

  return (
    <ModalBtnsContainer className='modal-btns-container'>
      <Button text='취소' color='transparent' onClick={() => dispatch(setIsUploadModal(false))} />
      <Button text='출간하기' color='teal' onClick={onUpload} />
      <Toastify />
    </ModalBtnsContainer>
  );
};

const ModalBtnsContainer = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;

  button + button {
    margin-left: 0.875rem;
  }
`;

export default ModalBtns;
