import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../../../store/modules/user';
import styled from 'styled-components';
import { apiClient } from '../../../../api';
import Button from '../../../../components/Button';
import { settingProfileButtonMaxWidth768px } from '../../../../styles/media';

const UploadImage = () => {
  const imageRef = useRef(null);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  const getImage = e => {
    // if (!imageRef.current) return;
    // e.preventDefault();
    imageRef.current.click();
  };

  // const onUploadImage = e => {
  //   if (!e.target.files) return;
  //   dispatch(
  //     setUser({
  //       ...user,
  //       profile_image: URL.createObjectURL(e.target.files[0]),
  //     })
  //   );
  // };

  const removeImage = () => {
    dispatch(
      setUser({
        ...user,
        profile_image: null,
      })
    );
  };

  const uploadImage = async e => {
    if (!e.target.files) return;
    e.preventDefault();

    const uploadFile = e.target.files[0];
    const formData = new FormData();
    formData.append('file', uploadFile);

    console.log(e.target.files[0]);

    // const body = {
    //   profile_image: e.target.files[0],
    // };

    // console.log(body);

    try {
      const config = {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MTAsImxvZ2luX2lkIjoieW91YmlubiIsIm5hbWUiOiLsnbvsnYAifSwiaWF0IjoxNjY5OTAzOTU1fQ.PMGvDfMgixAdeJoL1qIMbs7QRBX0PBrUlFr9SxnRYTQ`,
          'Content-Type': 'multipart/form-data',
        },
      };
      const { data } = await apiClient.patch('/users/profile_image', formData, config);
      console.log('222', resp.data);
      dispatch(
        setUser({
          ...user,
          profile_image: data.imageUrl,
          // profile_image: URL.createObjectURL(),
          // body,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UploadContainer>
      <input type='file' accept='image/*' ref={imageRef} onChange={uploadImage} onClick={e => e.target.value === null} />
      <Button text='이미지 업로드' className='upload' onClick={getImage} />
      <Button text='이미지 제거' className='remove' onClick={removeImage} />
    </UploadContainer>
  );
};

const UploadContainer = styled.div`
  input {
    display: none;
  }

  button {
    display: flex;
    flex-direction: column;

    ${settingProfileButtonMaxWidth768px};
  }

  .upload {
    width: 100%;
    background: var(--primary1);
    color: var(--button-text);

    &:hover {
      background: var(--primary2);
    }
  }

  .remove {
    width: 100%;
    background: transparent;
    color: var(--primary1);

    &:hover {
      background: var(--slight-layer);
      color: var(--primary2);
    }
  }

  button + button {
    margin-top: 0.5rem;
    margin-left: 0px;
  }
`;

export default UploadImage;
