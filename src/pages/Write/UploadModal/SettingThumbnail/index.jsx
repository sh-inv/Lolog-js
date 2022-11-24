import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setThmbnail } from '../../../../store/modules/write';
import ContentWrapper from '../ContentWrapper';
import { SlPicture } from 'react-icons/sl';
import styled from 'styled-components';

const SettingThumbnail = () => {
  const thumbnail = useSelector(state => state.writeContent.thumbnail);
  const dispatch = useDispatch();
  const thumbnailInput = useRef();

  const handleClick = () => {
    console.log(thumbnailInput.current);
    thumbnailInput.current.click();
  };

  const saveFileImage = e => {
    dispatch(setThmbnail(URL.createObjectURL(e.target.files[0])));
  };

  const removeFileImage = () => {
    dispatch(setThmbnail(null));
  };

  return (
    <SettingThumbnailContainer>
      <ContentWrapper contentTitle={'포스트 미리보기'}>
        <div className='thumbnail-container'>
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
              <img src={thumbnail} alt='thumbnail' />
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
        </div>
        <div className='summary-container'>
          <h4>title</h4>
          <textarea placeholder='당신의 포스트를 짧게 소개해보세요.' />
          <p>0/150</p>
        </div>
      </ContentWrapper>
    </SettingThumbnailContainer>
  );
};

const SettingThumbnailContainer = styled.div`
  .thumbnail-container {
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

      img {
        width: 100%;
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
  }

  .summary-container {
    margin-top: 1.5rem;

    textarea {
      width: 100%;
      height: 7.375rem;
      margin-top: 0.5rem;
      padding: 0.75rem 1rem;
      resize: none;
      border: none;
      outline: none;
      box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
      background: var(--bg-element7);
      color: var(--text1);
      line-height: 1.5;
      font-size: 0.875rem;
    }

    p {
      text-align: right;
      margin-top: 0.25rem;
      color: var(--text3);
      font-size: 0.75rem;
    }
  }
`;

export default SettingThumbnail;
