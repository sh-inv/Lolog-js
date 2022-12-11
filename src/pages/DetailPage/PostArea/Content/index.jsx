import styled from 'styled-components';

const Content = ({ postContent }) => {
  return (
    <ContentContainer>
      <div className='content'>{postContent}아직 내용 없음</div>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  margin: 5rem auto 0px;
  width: 768px;

  .content {
    color: var(--text1);
    line-height: 1.7;
    letter-spacing: -0.004em;
    font-size: 1.125rem;
    word-break: keep-all;
    overflow-wrap: break-word;
    transition: color 0.125s ease-in 0s;
  }
`;

export default Content;
