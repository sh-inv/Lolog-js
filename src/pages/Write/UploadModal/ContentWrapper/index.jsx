import styled from 'styled-components';

const ContentWrapper = ({ contentTitle, children }) => {
  return (
    <ContentWrapperContainer>
      <h3>{contentTitle}</h3>
      <div className='content'>{children}</div>
    </ContentWrapperContainer>
  );
};

const ContentWrapperContainer = styled.section`
  h3 {
    margin-top: 0px;
    margin-bottom: 0.5rem;
    line-height: 1.5;
    color: var(--text1);
    font-size: 1.3125rem;
  }

  h4 {
    display: block;
    margin: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
    font-size: 1.125rem;
  }
`;

export default ContentWrapper;
