import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setImageFileUrl } from '../../../../../store/modules/write';
import styled from 'styled-components';

const ToolBarBtnWrapper = ({ type, children, setSelectedTool }) => {
  const dispatch = useDispatch();
  const photoInput = useRef();

  const handleClick = () => {
    if (type === 'image') photoInput.current.click();
    setSelectedTool(type);
  };

  const saveFileImage = e => {
    dispatch(setImageFileUrl(URL.createObjectURL(e.target.files[0])));
  };

  return (
    <ToolBarBtnWrapperContainer onClick={handleClick}>
      <div className={type}>{children}</div>
      {type === 'image' && <input type='file' accept='image/jpg, image/jpeg, image/png' multiple ref={photoInput} onChange={saveFileImage} style={{ display: 'none' }} />}
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
  .image {
    font-size: 1.25rem;
  }
`;

export default ToolBarBtnWrapper;
