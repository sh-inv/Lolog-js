import styled from 'styled-components';

const ToolBarBtnWrapper = ({ type }) => {
  return <ToolBarBtnWrapperContainer className={type}></ToolBarBtnWrapperContainer>;
};

const ToolBarBtnWrapperContainer = styled.button``;

export default ToolBarBtnWrapper;
