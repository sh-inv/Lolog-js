import { useState, useEffect } from 'react';
import Post from './Post';
import styled from 'styled-components';

const PostList = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const postData = [
      {
        title: '포스트 제목 ddddddd111212341415151515115151515',
        contents:
          '✅ e-commerce 사이트의 경우 사진 사용에서 저작권에 자유롭지 못한 점과 조회에 관련된 기능들이 메인으로 조회 기능에 치우쳐서 프로젝트를 진행하기보다는 밸런스 있게 게시판(CRUD) 형식의 사이트를 경험하고자 선정하였다. 또한 부트 캠프를 들어와서 처음 시작하는 프로젝트인 만큼 다양한 기능을 진행해 보는 것보다는 완성도에 목표를 두고 싶었다.',
        created_at: 'November 16, 2022 11:08:00',
      },
      {
        title: '포스트 제목 ddddd11121234145151515',
        contents:
          '✅ e-commerce 사이트의 경우 사진 사용에서 저작권에 자유롭지 못한 점과 조회에 관련된 기능들이 메인으로 조회 기능에 치우쳐서 프로젝트를 진행하기보다는 밸런스 있게 게시판(CRUD) 형식의 사이트를 경험하고자 선정하였다. 또한 부트 캠프를 들어와서 처음 시작하는 프로젝트인 만큼 다양한 기능을 진행해 보는 것보다는 완성도에 목표를 두고 싶었다.',
        created_at: 'May 16, 2022 11:08:00',
      },
      {
        title: '111111111',
        contents:
          '✅ e-commerce 사이트의 경우 사진 사용에서 저작권에 자유롭지 못한 점과 조회에 관련된 기능들이 메인으로 조회 기능에 치우쳐서 프로젝트를 진행하기보다는 밸런스 있게 게시판(CRUD) 형식의 사이트를 경험하고자 선정하였다. 또한 부트 캠프를 들어와서 처음 시작하는 프로젝트인 만큼 다양한 기능을 진행해 보는 것보다는 완성도에 목표를 두고 싶었다.',
        created_at: 'November 18, 2022 11:08:00',
      },
      {
        title: '포스트 제목포스트 제목포스트 제목포스트 제목포스트 제목포스트 제목',
        contents:
          '✅ e-commerce 사이트의 경우 사진 사용에서 저작권에 자유롭지 못한 점과 조회에 관련된 기능들이 메인으로 조회 기능에 치우쳐서 프로젝트를 진행하기보다는 밸런스 있게 게시판(CRUD) 형식의 사이트를 경험하고자 선정하였다. 또한 부트 캠프를 들어와서 처음 시작하는 프로젝트인 만큼 다양한 기능을 진행해 보는 것보다는 완성도에 목표를 두고 싶었다.',
        created_at: 'November 16, 2022 11:08:00',
      },
    ];
    setPostList(postData);
  }, []);

  return (
    <PostListContainer>
      {postList.map(post => {
        return <Post key={post.title} title={post.title} contents={post.contents} date={post.created_at} className='post' />;
      })}
    </PostListContainer>
  );
};

const PostListContainer = styled.div`
  margin-top: 4rem;

  .post + .post {
    margin-top: 4rem;
  }
`;

export default PostList;
