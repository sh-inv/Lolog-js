import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MinWidth1200pxTagList = () => {
  const list = [
    {
      name: '전체보기',
      post: 123,
    },
    {
      name: '1',
      post: 4563,
    },
    {
      name: '2',
      post: 234,
    },
    {
      name: '3',
      post: 5,
    },
    {
      name: '4',
      post: 7,
    },
    {
      name: '5',
      post: 345,
    },
    {
      name: '6',
      post: 789,
    },
    {
      name: '7',
      post: 76,
    },
    {
      name: '8',
      post: 52,
    },
    {
      name: '9',
      post: 33,
    },
  ];

  return (
    <MinWidth1200pxTagListContainer>
      <div className='tag-list'>태그 목록</div>
      <ul>
        {list.map(tag => (
          <li className='tag' key={tag.name}>
            <NavLink to={tag.name === '전체보기' ? `/id` : `/id?tag=${tag.name}`} className='tag-link'>
              {tag.name}
            </NavLink>
            <span className='tag-post-count'>({tag.post})</span>
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
