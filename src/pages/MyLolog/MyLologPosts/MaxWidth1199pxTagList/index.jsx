import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const MaxWidth1199pxTagList = ({ tagData, setPostsData, setPageNum }) => {
  const location = useLocation();

  return (
    <MaxWidth1199pxTagListContainer>
      <ul className='tag-list'>
        {tagData.map(tag => (
          <NavLink
            to={tag.name === '전체보기' ? `${location.pathname}` : `${location.pathname}?tag=${tag.tag_id}`}
            key={tag.name}
            onClick={() => {
              setPostsData([]);
              setPageNum(1);
            }}
            className={() => {
              const params = new URLSearchParams(location.search);
              const getTag = params.get('tag');
              if (getTag === tag.tag_id || (!location.search && tag.name === '전체보기')) return 'tag-link active';
              else return 'tag-link';
            }}
          >
            {tag.name}
            <span className='tag-post-count'>({tag.post_count})</span>
          </NavLink>
        ))}
      </ul>
    </MaxWidth1199pxTagListContainer>
  );
};

const MaxWidth1199pxTagListContainer = styled.div`
  .tag-list {
    display: flex;
    overflow-x: auto;
    margin-top: -1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 0.5rem;

    .tag-link {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      height: 1.5rem;
      margin-left: 0.5rem;
      border-radius: 0.75rem;
      padding: 0 0.75rem;
      color: var(--text1);
      font-size: 0.75rem;
      line-height: 1.5;
      background: var(--bg-element1);
    }

    .active {
      background: var(--primary1);
      color: #ffffff;
    }
  }

  @media screen and (min-width: 1201px) {
    display: none;
  }
`;

export default MaxWidth1199pxTagList;
