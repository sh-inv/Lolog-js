import { useSelector } from 'react-redux';
import SettingThumbnail from './SettingThumbnail';
import SettingPublic from './ SettingPublic';
import SettingSeries from './SettingSeries';
import ModalBtns from './ModalBtns';
import styled from 'styled-components';
import SettingDescription from './SettingDescription';

const UploadModal = () => {
  const { isSeriesList } = useSelector(state => state.writeContent);

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
  width: 100%;
  height: 100%;
  background: var(--bg-element2);
  z-index: 100;
  animation: 0.25s ease-in 0s 1 normal forwards running bpwQty;

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
