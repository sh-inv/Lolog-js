import styled from 'styled-components';

const Content = () => {
  return (
    <ContentContainer>
      <div className='content'>content</div>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  width: 768px;
  margin: 5rem auto 0px;
  .content {
    font-size: 1.125rem;
    color: var(--text1);
    transition: color 0.125s ease-in 0s;
    line-height: 1.7;
    letter-spacing: -0.004em;
    word-break: keep-all;
    overflow-wrap: break-word;
  }
`;

export default Content;
