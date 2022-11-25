import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Preview = () => {
  const { title, content } = useSelector(state => state.writeContent);

  return (
    <PreviewContainer className='preview-container'>
      <h1 className='preview-title'>{title}</h1>
      <div className='preview-content'>
        <p>{content}</p>
      </div>
    </PreviewContainer>
  );
};

const PreviewContainer = styled.div`
  background-color: var(--bg-element8);
  color: var(--text1);

  h1 {
    font-size: 2.5em;
    margin-top: 1.675rem;
    margin-bottom: 4rem;
    font-weight: 800;
  }

  .preview-content {
    overflow-wrap: break-word;
    word-break: keep-all;
    line-height: 1.7;
    letter-spacing: -0.004em;
    font-size: 1.125rem;
    transition: color 0.125s ease-in 0s;

    p {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
  }
`;

export default Preview;
