import { useDispatch, useSelector } from 'react-redux';
// import { setSelectedTool } from '../../../../../store/modules/write';
import styled from 'styled-components';

const ToolBarHTagWrapper = ({ type }) => {
  const { content } = useSelector(state => state.writeContent);
  const dispatch = useDispatch();

  const hTagToolHandler = e => {
    const tool = e.target.className.split(' ').pop();
    let toolToValue = '';

    // let updateContent = '';
    // const isAlreadyHashtag = content.split(' ')[0].includes('#');

    switch (tool) {
      case 'H1':
        toolToValue = '# ';
        break;
      case 'H2':
        toolToValue = '## ';
        break;
      case 'H3':
        toolToValue = '### ';
        break;
      case 'H4':
        toolToValue = '#### ';
        break;
      default:
        break;
    }
    console.log(toolToValue);

    // if (isAlreadyHashtag) {
    //   let result = currentContent.split(' ');
    //   result[0] = toolToValue;
    //   updateContent = result.join('');
    // } else {
    //   updateContent = toolToValue + currentContent;
    // }

    // return updateContent;
  };

  return (
    <ToolBarHTagWrapperContainer className={`H${type[1]}`} onClick={hTagToolHandler}>
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
    pointer-events: none;
  }

  span {
    font-size: 0.75rem;
    pointer-events: none;
  }
`;

export default ToolBarHTagWrapper;
