import styled from 'styled-components';
import { writeMaxWidth1024px, writeMaxWidth1920px, writeMaxWidth768px } from '../../styles/media';
import Editor from './Editor';
import Preview from './Preview';
import ReversePositionBtn from './ReversePositionBtn';

const Write = () => {
  return (
    <WriteContainer>
      <ReversePositionBtn />
      <Editor />
      <Preview />
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
