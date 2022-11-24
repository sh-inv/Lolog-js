import styled from 'styled-components';
import Button from '../../../components/Button';
import SettingThumbnail from './SettingThumbnail';
import SettingPublic from './ SettingPublic';
import SettingUrl from './SettingUrl';
import SettingSeries from './SettingSeries';

const UploadModal = () => {
  return (
    <UploadModalContainer>
      <div className='upload-modal-content'>
        <div className='left-section'>
          <SettingThumbnail />
        </div>
        <div className='upload-modal-dividing-line' />
        <div className='right-section'>
          <div className='right-section-content'>
            <SettingPublic />
            <SettingUrl />
            <SettingSeries />
          </div>
          <div className='right-section-btn'>
            <Button text='취소' className='' />
            <Button text='출간하기' className='' />
          </div>
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
  z-index: 15;
  animation: 0.25s ease-in 0s 1 normal forwards running bpwQty;

  .upload-modal-content {
    display: flex;
    width: 768px;

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

      .right-section-btn {
        display: flex;
        -webkit-box-pack: end;
        justify-content: flex-end;

        button + button {
          margin-left: 0.875rem;
        }
      }
    }
  }

  section + section {
    margin-top: 1.5rem;
  }
`;

export default UploadModal;
