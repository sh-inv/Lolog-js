import styled from 'styled-components';

const MyLololgNoPost = () => {
  return (
    <NoPostContainer>
      <img src='https://static.velog.io/static/media/undraw_blank_canvas_3rbb.35e81baf.svg' alt='포스트가 없습니다.' className='no-post-img' />
      <div className='no-post-txt'>포스트가 없습니다.</div>
    </NoPostContainer>
  );
};

const NoPostContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 6rem;
  margin-bottom: 3rem;

  .no-post-img {
    width: 20rem;
  }

  .no-post-txt {
    font-size: 2rem;
    color: var(--text3);
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
`;

export default MyLololgNoPost;
