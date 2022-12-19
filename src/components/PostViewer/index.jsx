import styled from 'styled-components';
import { postViewerMaxWidth1024px, postViewerMaxWidth768px } from '../../styles/media';

const PostViewer = ({ content }) => {
  return (
    <PostViewerContainer>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </PostViewerContainer>
  );
};

const PostViewerContainer = styled.div`
  color: var(--text1);
  line-height: 1.7;
  letter-spacing: -0.004em;
  font-size: 1.125rem;
  word-break: keep-all;
  overflow-wrap: break-word;
  transition: color 0.125s ease-in 0s;

  h1,
  h2,
  h3,
  h4 {
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  strong {
    font-weight: 800;
  }

  em {
    font-style: italic;
  }

  img {
    width: 100%;
  }

  blockquote {
    margin: 0.5rem 0px;
    padding: 1rem 1rem 1rem 2rem;
    border-top-right-radius: 4px;
    border-left: 4px solid var(--primary2);
    border-bottom-right-radius: 4px;
    background: var(--bg-element2);
    color: var(--text1);
  }

  code {
    margin: 0;
    padding: 0.5em 1rem;
    border-radius: 0.5em;
    line-height: 1.5;
    background: var(--prism-bg);
    color: var(--text1);
    font-size: 0.875rem;
    letter-spacing: 0px;
    font-family: 'Fira Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    overflow-x: auto;
  }

  a {
    color: var(--primary2);
    cursor: pointer;
  }
  a:visited {
    color: var(--primary2);
  }

  ${postViewerMaxWidth1024px}
  ${postViewerMaxWidth768px}
`;

export default PostViewer;
