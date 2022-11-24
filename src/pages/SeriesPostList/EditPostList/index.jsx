import { useState, useEffect } from 'react';
import Post from '../PostList/Post';
import styled from 'styled-components';

const EditPostList = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const postData = [
      {
        title: '포스트 제목 ddddddd1112 12341415151515115151515',
        src: 'https://velog.velcdn.com/images/daydreamplace/post/3efb2dc0-8fb0-4c92-bf42-17c006e5ee62/image.png',
        contents:
          '✅ e-commerce 사이트의 경우 사진 사용에서 저작권에 자유롭지 못한 점과 조회에 관련된 기능들이 메인으로 조회 기능에 치우쳐서 프로젝트를 진행하기보다는 밸런스 있게 게시판(CRUD) 형식의 사이트를 경험하고자 선정하였다. 또한 부트 캠프를 들어와서 처음 시작하는 프로젝트인 만큼 다양한 기능을 진행해 보는 것보다는 완성도에 목표를 두고 싶었다.',
        created_at: 'November 16, 2022 11:08:00',
      },
      {
        title: '포스트 제목포스트 제목포스트 제목포스트 제목포스트 제목포스트 제목',
        src: '',
        contents:
          '✅ e-commerce 사이트의 경우 사진 사용에서 저작권에 자유롭지 못한 점과 조회에 관련된 기능들이 메인으로 조회 기능에 치우쳐서 프로젝트를 진행하기보다는 밸런스 있게 게시판(CRUD) 형식의 사이트를 경험하고자 선정하였다. 또한 부트 캠프를 들어와서 처음 시작하는 프로젝트인 만큼 다양한 기능을 진행해 보는 것보다는 완성도에 목표를 두고 싶었다.',
        created_at: 'November 16, 2022 11:08:00',
      },
      {
        title: '포스트 제목 ddddd11121234145151515',
        src: 'https://velog.velcdn.com/images/daydreamplace/post/3efb2dc0-8fb0-4c92-bf42-17c006e5ee62/image.png',
        contents:
          '✅ e-commerce 사이트의 경우 사진 사용에서 저작권에 자유롭지 못한 점과 조회에 관련된 기능들이 메인으로 조회 기능에 치우쳐서 프로젝트를 진행하기보다는 밸런스 있게 게시판(CRUD) 형식의 사이트를 경험하고자 선정하였다. 또한 부트 캠프를 들어와서 처음 시작하는 프로젝트인 만큼 다양한 기능을 진행해 보는 것보다는 완성도에 목표를 두고 싶었다.',
        created_at: 'May 16, 2022 11:08:00',
      },
      {
        title: '111111111',
        src: 'https://velog.velcdn.com/images/daydreamplace/post/3efb2dc0-8fb0-4c92-bf42-17c006e5ee62/image.png',
        contents:
          '✅ e-commerce 사이트의 경우 사진 사용에서 저작권에 자유롭지 못한 점과 조회에 관련된 기능들이 메인으로 조회 기능에 치우쳐서 프로젝트를 진행하기보다는 밸런스 있게 게시판(CRUD) 형식의 사이트를 경험하고자 선정하였다. 또한 부트 캠프를 들어와서 처음 시작하는 프로젝트인 만큼 다양한 기능을 진행해 보는 것보다는 완성도에 목표를 두고 싶었다.',
        created_at: 'November 18, 2022 11:08:00',
      },
    ];
    setPostList(postData);
  }, []);

  return (
    <EditPostListContainer>
      {postList.map(post => {
        return (
          <div className='edit-post-wrapper'>
            <Post key={post.title} title={post.title} src={post.src} contents={post.contents} date={post.created_at} className='edit-post' />
          </div>
        );
      })}
    </EditPostListContainer>
  );
};

const EditPostListContainer = styled.div`
  margin-top: 3rem;
  padding: 1.5rem 1.5rem 0.5rem;
  background: rgb(248, 249, 250);
  border-radius: 4px;

  .edit-post-wrapper {
    user-select: none;
    opacity: 1;
    margin-bottom: 1rem;

    .edit-post {
      padding: 1rem;
      background: var(--bg-element1);
      border-radius: 4px;
      box-shadow: rgb(0 0 0 / 6%) 0px 0px 2px;
    }
  }
`;

export default EditPostList;
