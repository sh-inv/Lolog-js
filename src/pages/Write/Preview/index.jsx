import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Preview = () => {
  const { title, content } = useSelector(state => state.writeContent);

  return (
    <PreviewContainer className='preview-container'>
      <h1 className='preview-title'>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
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

  img {
    width: 100%;
  }

  code {
    margin: 0;
    background: var(--bg-element4);
    color: var(--text1);
    padding: 0.5em 1rem;
    border-radius: 0.5em;
  }

  a {
    color: blue;
    cursor: pointer;
  }
`;

export default Preview;
