import styled from 'styled-components';

const ToolBarHTagWrapper = ({ type, setSelectedTool }) => {
  return (
    <ToolBarHTagWrapperContainer onClick={() => setSelectedTool(type)}>
      <div>
        H<span>{type[1]}</span>
      </div>
    </ToolBarHTagWrapperContainer>
  );
};

const ToolBarHTagWrapperContainer = styled.button`
  font-weight: bold;
  font-family: serif;

  div {
    padding-top: 3px;
  }

  span {
    font-size: 0.75rem;
  }
`;

export default ToolBarHTagWrapper;
