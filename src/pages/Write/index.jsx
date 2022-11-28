import { useSelector } from 'react-redux';
import Editor from './Editor';
import Preview from './Preview';
import ReversePositionBtn from './ReversePositionBtn';
import UploadModal from './UploadModal';
import styled from 'styled-components';
import { writeMaxWidth1024px, writeMaxWidth1920px, writeMaxWidth768px } from '../../styles/media';

const Write = () => {
  const { isReverse, isUploadModal } = useSelector(state => state.writeContent);

  return (
    <WriteContainer>
      <ReversePositionBtn />
      {isReverse ? (
        <>
          <Preview />
          <Editor />
        </>
      ) : (
        <>
          <Editor />
          <Preview />
        </>
      )}
      {isUploadModal && <UploadModal />}
    </WriteContainer>
  );
};

const WriteContainer = styled.div`
  display: flex;

  ${writeMaxWidth1920px}
  ${writeMaxWidth1024px}
  ${writeMaxWidth768px}
`;

export default Write;
