import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MaxWidth1199pxTagList = () => {
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
    {
      name: '11',
      post: 33,
    },
    {
      name: '12',
      post: 33,
    },
    {
      name: '13',
      post: 33,
    },
    {
      name: '14',
      post: 33,
    },
    {
      name: '15',
      post: 33,
    },
    {
      name: '16',
      post: 33,
    },
    {
      name: '17',
      post: 33,
    },
    {
      name: '18',
      post: 33,
    },
    {
      name: '19',
      post: 33,
    },
    {
      name: '20',
      post: 33,
    },
    {
      name: '21',
      post: 33,
    },
    {
      name: '22',
      post: 33,
    },
    {
      name: '23',
      post: 33,
    },
    {
      name: '24',
      post: 33,
    },
    {
      name: '25',
      post: 33,
    },
    {
      name: '26',
      post: 33,
    },
  ];

  return (
    <MaxWidth1199pxTagListContainer>
      <ul className='tag-list'>
        {list.map(tag => (
          <NavLink
            to={tag.name === '전체보기' ? `/id` : `/id?tag=${tag.name}`}
            key={tag.name}
            className={() => {
              const params = new URLSearchParams(location.search);
              const getTag = params.get('tag');
              if (getTag === tag.name || (!location.search && tag.name === '전체보기')) return 'tag-link active';
              else return 'tag-link';
            }}
          >
            {tag.name}
            <span className='tag-post-count'>({tag.post})</span>
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
