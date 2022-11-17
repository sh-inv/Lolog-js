import styled from 'styled-components';

const ModifyAbout = () => {
  return (
    <ModifyAboutContainer>
      <div className='modify'> It's just one part of me,</div>
    </ModifyAboutContainer>
  );
};

const ModifyAboutContainer = styled.div`
  .modify {
    height: auto;
    font-size: 1.125rem;
    line-height: 1.5;
    color: var(--text1);
    font-family: 'Fira Mono', monospace;
  }
`;

export default ModifyAbout;
