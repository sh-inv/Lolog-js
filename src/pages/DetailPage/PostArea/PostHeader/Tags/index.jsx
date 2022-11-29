import styled from 'styled-components';

const Tags = () => {
  return (
    <TagsContainer>
      <a href=''>백엔드</a>
    </TagsContainer>
  );
};

const TagsContainer = styled.div`
  margin-top: 0.875rem;
  margin-bottom: -0.875rem;
  min-height: 0.875rem;
  a {
    margin-bottom: 0.875rem;
    background: var(--bg-tag);
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2rem;
    border-radius: 1rem;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 0.875rem;
    color: var(--primary1);
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
  }
`;

export default Tags;
