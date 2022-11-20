import styled from 'styled-components';

const ToolBarBtnWrapper = ({ type, children }) => {
  return (
    <ToolBarBtnWrapperContainer>
      <div className={type}>{children}</div>
    </ToolBarBtnWrapperContainer>
  );
};

const ToolBarBtnWrapperContainer = styled.button`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .quote,
  .link,
  .code {
    font-size: 1.5rem;
  }

  .remove,
  .picture {
    font-size: 1.25rem;
  }
`;

export default ToolBarBtnWrapper;
