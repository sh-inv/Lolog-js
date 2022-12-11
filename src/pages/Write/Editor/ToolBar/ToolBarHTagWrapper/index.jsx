import styled from 'styled-components';

const ToolBarHTagWrapper = ({ type }) => {
  return <ToolBarHTagWrapperContainer className='ql-header' value={type[1]}></ToolBarHTagWrapperContainer>;
};

const ToolBarHTagWrapperContainer = styled.button``;

export default ToolBarHTagWrapper;
