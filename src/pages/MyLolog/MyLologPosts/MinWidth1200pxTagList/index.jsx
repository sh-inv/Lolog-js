import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const MinWidth1200pxTagList = ({ tagData, setPostsData, setPageNum }) => {
  const location = useLocation();

  return (
    <MinWidth1200pxTagListContainer>
      <div className='tag-list'>태그 목록</div>
      <ul>
        {tagData.map(tag => (
          <li className='tag' key={tag.name}>
            <NavLink
              to={tag.name === '전체보기' ? `${location.pathname}` : `${location.pathname}?tag=${tag.tag_id}`}
              className={() => {
                const params = new URLSearchParams(location.search);
                const getTag = params.get('tag');
                if (getTag === tag.tag_id || (!location.search && tag.name === '전체보기')) return 'tag-link active';
                else return 'tag-link';
              }}
              onClick={() => {
                setPostsData([]);
                setPageNum(1);
              }}
            >
              {tag.name}
            </NavLink>
            <span className='tag-post-count'>({tag.post_count})</span>
          </li>
        ))}
      </ul>
    </MinWidth1200pxTagListContainer>
  );
};

const MinWidth1200pxTagListContainer = styled.div`
  position: absolute;
  left: -13.5rem;
  width: 11.5rem;

  .tag-list {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border2);
    margin-bottom: 1rem;
    color: var(--text2);
    font-size: 1rem;
    line-height: 1.5;
  }

  .tag {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.5;
    color: var(--text1);

    .tag-link {
      color: inherit;

      &:hover {
        text-decoration: underline;
      }
    }

    .active {
      color: var(--primary2);
    }

    .tag-post-count {
      margin-left: 0.5rem;
      color: var(--text3);
    }
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export default MinWidth1200pxTagList;
