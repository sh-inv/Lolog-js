import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWriteContent } from '../../../../store/modules/write';
import { apiClient } from '../../../../api';
import ContentWrapper from '../ContentWrapper';
import { SlPicture } from 'react-icons/sl';
import { toast } from 'react-toastify';
import Toastify from '../../../../components/Toastify';
import styled from 'styled-components';

const SettingThumbnail = () => {
  const { thumbnail } = useSelector(state => state.writeContent);
  const thumbnailInput = useRef();
  const dispatch = useDispatch();

  const handleClick = () => {
    thumbnailInput.current.click();
  };

  const saveFileImage = async e => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append('image', e.target.files[0]);

      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'multipart/form-data',
        },
      };
      toast.error('이미지 로딩중...');
      const response = await apiClient.post(`/uploads?image_url=${URL.createObjectURL(e.target.files[0])}`, formData, config);
      dispatch(setWriteContent({ type: 'thumbnail', value: `${response.data.imageUrl[0]}` }));
      toast.success('이미지 업로드 완료');
    } catch (error) {
      toast.success('이미지 업로드 실패');
      console.log(error);
    }
  };

  const removeFileImage = () => {
    dispatch(setWriteContent({ type: 'thumbnail', value: '' }));
  };

  return (
    <ContentWrapper contentTitle={'포스트 미리보기'}>
      <SettingThumbnailContainer className='setting-thumbnail-container'>
        {thumbnail ? (
          <div className='have-thumbnail'>
            <p>
              <span onClick={handleClick}>
                재업로드
                <input type='file' accept='image/jpg, image/jpeg, image/png' multiple ref={thumbnailInput} onChange={saveFileImage} style={{ display: 'none' }} />
              </span>
              &#183;
              <span onClick={removeFileImage}>제거</span>
            </p>
            <div className='thumbnail-img-wrapper'>
              <img src={`http://localhost:8080/public/${thumbnail}`} alt='thumbnail' />
            </div>
          </div>
        ) : (
          <div className='none-thumbnail'>
            <SlPicture className='thumbnail-icon' />
            <button onClick={handleClick}>
              썸네일 업로드
              <input type='file' accept='image/jpg, image/jpeg, image/png' multiple ref={thumbnailInput} onChange={saveFileImage} style={{ display: 'none' }} />
            </button>
          </div>
        )}
      </SettingThumbnailContainer>
      <Toastify />
    </ContentWrapper>
  );
};

const SettingThumbnailContainer = styled.div`
  .none-thumbnail,
  .have-thumbnail {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background: var(--bg-element3);
  }

  .have-thumbnail {
    padding: 0;
    background: inherit;
    .thumbnail-img-wrapper {
      img {
        width: 100%;
        max-height: 10rem;
      }
    }
    p {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      color: var(--text4);
      font-size: 0.9rem;
      span {
        margin: 0 0.5rem;
        margin-bottom: 0.3rem;
        text-decoration: underline;
        color: var(--text3);
        cursor: pointer;
      }
    }
  }

  .none-thumbnail {
    .thumbnail-icon {
      font-size: 6rem;
      color: var(--text4);
    }

    button {
      margin-top: 1rem;
      padding: 0.25rem 2rem;
      outline: none;
      border: none;
      border-radius: 4px;
      box-shadow: rgb(0 0 0 / 2%) 0px 0px 4px;
      background: var(--bg-element1);
      color: var(--primary2);
      font-size: 1rem;
      font-weight: bold;
      line-height: 1.5;
      transition: all 0.125s ease-in 0s;

      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
    }
  }
`;

export default SettingThumbnail;
