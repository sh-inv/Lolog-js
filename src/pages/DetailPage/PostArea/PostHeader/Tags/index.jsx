import styled from 'styled-components';

const Tags = ({ tags }) => {
  return (
    <TagsContainer>
      {tags &&
        tags.map(tag => {
          return (
            <a key={tag.tag_name} href={`/tags/${tag.tag_name}`}>
              {tag.tag_name}
            </a>
          );
        })}
    </TagsContainer>
  );
};

const TagsContainer = styled.div`
  min-height: 0.875rem;
  margin-top: 0.875rem;
  margin-bottom: -0.875rem;

  a {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 0.875rem;
    margin-bottom: 0.875rem;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2rem;
    border-radius: 1rem;
    background: var(--bg-tag);
    color: var(--primary1);
    font-weight: 500;
    font-size: 1rem;
    text-decoration: none;
  }
`;

export default Tags;
