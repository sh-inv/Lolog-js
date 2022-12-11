import { useState, useRef, useMemo } from 'react';
import { apiClient } from '../../../../api';
import ReactQuill from 'react-quill';
import { toast } from 'react-toastify';
import Toastify from '../../../../components/Toastify';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';

const WriteZone = () => {
  const [text, setText] = useState('');
  const quillRef = useRef();

  const imageHandler = () => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input && input.files ? input.files[0] : null;
      const formData = new FormData();
      formData.append('image', file);

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            'Content-Type': 'multipart/form-data',
          },
        };
        const response = await apiClient.post(`/uploads?image_url=${URL.createObjectURL(input.files[0])}`, formData, config);
        const imgUrl = response.data.imageUrl[0];
        const quillObj = quillRef.current.getEditor();
        const range = quillObj.getSelection();
        quillObj.insertEmbed(range.index, 'image', imgUrl);
        toast.success('이미지 업로드 완료');
      } catch (error) {
        toast.success('이미지 업로드 실패');
        console.log('editor img error =>', error);
        return false;
      }
    };
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: '#toolbar',
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);

  const formats = ['header', 'bold', 'italic', 'strike', 'blockquote', 'link', 'image', 'code'];

  const handleText = value => {
    console.log(value);
    setText(value);
  };

  return (
    <WriteZoneContainer>
      <div style={{ height: '25rem' }}>
        <ReactQuill ref={quillRef} style={{ height: '100%', width: '100%' }} theme='snow' modules={modules} formats={formats} value={text} onChange={handleText} />
      </div>
      <Toastify />
    </WriteZoneContainer>
  );
};

const WriteZoneContainer = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: var(--text3);
  font-style: italic;
  direction: ltr;
  cursor: text;
  caret-color: #56b6c2 !important;
`;

export default WriteZone;
