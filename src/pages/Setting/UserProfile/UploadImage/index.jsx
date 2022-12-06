import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../../../store/modules/user';
import styled from 'styled-components';
import Button from '../../../../components/Button';
import { settingProfileButtonMaxWidth768px } from '../../../../styles/media';

const UploadImage = () => {
  const imageRef = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const onUploadImage = e => {
    if (!e.target.files) return;
    dispatch(
      setUser({
        ...user,
        profile_image: URL.createObjectURL(e.target.files[0]),
      })
    );
  };

  const getImage = () => {
    if (!imageRef.current) return;
    imageRef.current.click();
  };

  const removeImage = () => {
    dispatch(
      setUser({
        ...user,
        profile_image: null,
      })
    );
  };

  return (
    <UploadContainer>
      <input type='file' accept='image/*' ref={imageRef} onChange={onUploadImage} onClick={e => e.target.value === null} />
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
