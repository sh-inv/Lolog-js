import styled from 'styled-components';
import { SlPicture } from 'react-icons/sl';

const ToolBarBtnWrapper = ({ type }) => {
  return (
    <ToolBarBtnWrapperContainer className={type}>
      <SlPicture />
    </ToolBarBtnWrapperContainer>
  );
};

const ToolBarBtnWrapperContainer = styled.button``;

export default ToolBarBtnWrapper;
