import { useSelector, useDispatch } from 'react-redux';
import { setWriteContent } from '../../../../store/modules/write';
import ContentWrapper from '../ContentWrapper';
import styled from 'styled-components';

const SettingUrl = () => {
  const uploadUrl = useSelector(state => state.writeContent.uploadUrl);
  const dispatch = useDispatch();

  return (
    <ContentWrapper contentTitle={'URL 설정'}>
      <SettingUrlContainer>
        <div className='url-container'>
          <span>/posts/</span>
          <input type='text' value={uploadUrl} onChange={e => dispatch(setWriteContent({ type: 'uploadUrl', value: e.target.value }))} />
        </div>
      </SettingUrlContainer>
    </ContentWrapper>
  );
};

const SettingUrlContainer = styled.div`
  .url-container {
    display: flex;
    padding: 0.5rem 0.875rem;
    box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
    background: var(--bg-element7);
    line-height: 1.5;

    span {
      padding-top: 5px;
      color: var(--text3);
    }

    input {
      flex: 1 1 0%;
      padding: 0px;
      outline: none;
      border: none;
      background: none;
      color: var(--text1);
      line-height: 1.5;
      font-size: 1rem;
    }
  }
`;

export default SettingUrl;
