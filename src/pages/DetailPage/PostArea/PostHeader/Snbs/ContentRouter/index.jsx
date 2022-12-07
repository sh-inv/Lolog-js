import styled from 'styled-components';

const ContentRouter = ({ ScrollActive }) => {
  return (
    <ContentRouterContainer>
      <div className={ScrollActive ? 'content-router-content fixed' : 'content-router-content'}>
        <div style={{ marginLeft: '0px' }}>
          <a href=''>10월</a>
        </div>
        <div style={{ marginLeft: '12px' }}>
          <a href=''>많은 면접을 보며 느낀 점</a>
        </div>
        <div style={{ marginLeft: '24px' }}>
          <a href=''>두둥탁</a>
        </div>
      </div>
    </ContentRouterContainer>
  );
};

const ContentRouterContainer = styled.div`
  position: absolute;
  left: 100%;
  .content-router-content {
    width: 240px;
    max-height: calc(100vh - 128px);
    line-height: 1.5;
    margin-left: 5rem;
    padding: 0.25rem 0.75rem;
    border-left: 2px solid var(--border4);
    color: var(--text3);
    font-size: 0.875rem;
    overflow: hidden auto;
    a {
      color: inherit;
    }
  }
`;

export default ContentRouter;
