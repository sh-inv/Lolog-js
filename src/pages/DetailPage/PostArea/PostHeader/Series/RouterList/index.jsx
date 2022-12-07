import styled from 'styled-components';

const RouterList = ({ postId, seriesData }) => {
  return (
    <RouterListContainer>
      {seriesData.map(seriesInfo => {
        return (
          <li key={seriesInfo.title}>
            <a className={seriesInfo.post_id === postId ? 'current-post-link' : ''} href={`/posts/${seriesInfo.post_id}`}>
              {seriesInfo.title}
            </a>
          </li>
        );
      })}
    </RouterListContainer>
  );
};

const RouterListContainer = styled.ol`
  padding-left: 0px;
  margin: 16px 0;
  line-height: 1.8;
  color: var(--text2);
  font-size: 1rem;
  counter-reset: item 0;

  .current-post-link {
    color: var(--primary1);
    font-weight: bold;
  }

  li::before {
    margin-right: 0.25rem;
    content: counter(item) '. ';
    counter-increment: item 1;
    color: var(--text3);
    font-style: italic;
    pointer-events: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default RouterList;
