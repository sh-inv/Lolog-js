import styled from 'styled-components';
import { writeMaxWidth1920px } from '../../styles/media';
import Editor from './Editor';
import Preview from './Preview';

const Write = () => {
  return (
    <WriteContainer>
      <Editor />
      <Preview />
    </WriteContainer>
  );
};

const WriteContainer = styled.div`
  display: flex;

  ${writeMaxWidth1920px}
`;

export default Write;
