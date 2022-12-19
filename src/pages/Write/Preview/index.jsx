import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PostViewer from '../../../components/PostViewer';

const Preview = () => {
  const { title, content } = useSelector(state => state.writeContent);

  return (
    <PreviewContainer className='preview-container'>
      <h1 className='preview-title'>{title}</h1>
      <PostViewer content={content} />
    </PreviewContainer>
  );
};

const PreviewContainer = styled.div`
  background-color: var(--bg-element8);
  color: var(--text1);

  .preview-title {
    font-size: 2.5em;
    margin-top: 1.675rem;
    margin-bottom: 4rem;
    font-weight: 800;
  }
`;

export default Preview;
