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
    if (!imageRef.current) return;
    e.preventDefault();
    imageRef.current.click();
  };

  const uploadImage = async e => {
    e.preventDefault();
    const uploadFile = e.target.files[0];
    const formData = new FormData();
    formData.delete('image', user.profile_image);
    formData.append('image', uploadFile);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'multipart/form-data',
        },
      };
      const { data } = await apiClient.post(`/users/profile_image?image_url=${URL.createObjectURL(e.target.files[0])}}`, formData, config);
      dispatch(
        setUser({
          ...user,
          profile_image: data.profile_image,
        })
      );
      localStorage.setItem('userProfileImg', user.profile_image);
    } catch (error) {
      console.log(error);
    }
  };

  const removeImage = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      const { data } = await apiClient.delete(`/users/profile_image?image_url=${user?.profile_image}`, config);
      dispatch(
        setUser({
          ...user,
          profile_image: data.profile_image,
        })
      );
      localStorage.setItem('userProfileImg', user.profile_image);
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
