import styled from 'styled-components';

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

  h1 {
    font-size: 3rem;
    font-weight: 800;
  }

  h2 {
    font-size: 2rem;
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
    color: var(--primary2);
    cursor: pointer;
  }
  a:visited {
    color: var(--primary2);
  }
`;

export default PostViewer;
