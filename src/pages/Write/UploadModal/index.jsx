import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWriteContent } from '../../../store/modules/write';
import SettingThumbnail from './SettingThumbnail';
import SettingDescription from './SettingDescription';
import SettingPublic from './ SettingPublic';
import SettingSeries from './SettingSeries';
import ModalBtns from './ModalBtns';
import styled from 'styled-components';

const UploadModal = () => {
  const { isUploadModal, isSeriesList } = useSelector(state => state.writeContent);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUploadModal) {
      history.pushState(null, '', '');
      window.onpopstate = () => {
        dispatch(setWriteContent({ type: 'isUploadModal', value: false }));
      };
    } else {
      window.onpopstate = () => {};
    }
  }, [isUploadModal]);

  return (
    <UploadModalContainer className='upload-modal-container'>
      <div className='upload-modal-content'>
        <div className='left-section'>
          <SettingThumbnail />
          <SettingDescription />
        </div>
        <div className='upload-modal-dividing-line' />
        <div className='right-section'>
          <div className='right-section-content'>
            {!isSeriesList && <SettingPublic />}
            <SettingSeries />
          </div>
          <ModalBtns />
        </div>
      </div>
    </UploadModalContainer>
  );
};

const UploadModalContainer = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 2;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background: var(--bg-element2);

  .upload-modal-content {
    display: flex;
    width: 768px;
    min-width: 340px;

    .left-section,
    .right-section {
      flex: 1 1 0%;
      min-width: 0px;
    }

    .upload-modal-dividing-line {
      width: 1px;
      margin-left: 2rem;
      margin-right: 2rem;
      min-height: 425px;
      background: var(--bg-element3);
    }

    .right-section {
      display: flex;
      flex-direction: column;
      -webkit-box-pack: justify;
      justify-content: space-between;
    }
  }

  section + section {
    margin-top: 1.5rem;
  }
`;

export default UploadModal;
