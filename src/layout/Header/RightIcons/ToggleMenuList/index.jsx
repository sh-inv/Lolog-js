import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ToggleMenuList = ({ toggleMenuRef, setIsToggleOpen }) => {
  const toggleMenuList = [
    {
      name: '내 벨로그',
      path: `/${localStorage.getItem('userId')}`,
    },
    {
      name: '새 글 작성',
      path: '/write',
    },
    {
      name: '임시 글',
      path: '/saves',
    },
    {
      name: '팔로우 목록',
      path: '/follow-list',
    },
    {
      name: '읽기 목록',
      path: '/lists/liked',
    },
    {
      name: '설정',
      path: '/setting',
    },
    {
      name: '로그아웃',
      path: '/',
      onClickHandler: async () => {
        await window.location.reload();
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userProfileImg');
      },
    },
  ];

  return (
    <ToggleMenuListContainer ref={toggleMenuRef}>
      {toggleMenuList.map(menu => {
        return (
          <Link
            key={menu.name}
            className='link-tag'
            to={menu.path}
            onClick={() => {
              setIsToggleOpen(false);
              menu.onClickHandler();
            }}
          >
            {menu.name}
          </Link>
        );
      })}
    </ToggleMenuListContainer>
  );
};

export default ToggleMenuList;

const ToggleMenuListContainer = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 0;
  width: 12rem;
  margin-top: 0.3rem;
  margin-left: auto;
  background-color: var(--bg-element1);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;

  .link-tag {
    display: block;
    padding: 1.25rem;
    font-size: 0.9rem;
    cursor: pointer;

    :nth-child(2) {
      @media only screen and (min-width: 1024px) {
        display: none;
      }
    }

    :hover {
      color: var(--primary1);
      background-color: var(--bg-element2);
    }
  }
`;
