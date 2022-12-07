import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import styled from 'styled-components';

const ListToggle = ({ isToggle, setIsToggle }) => {
  return (
    <ListToggleContainer onClick={() => setIsToggle(!isToggle)}>
      {isToggle ? <VscTriangleUp /> : <VscTriangleDown />}
      {isToggle ? '숨기기' : '목록 보기'}
    </ListToggleContainer>
  );
};

const ListToggleContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: -5px;
  line-height: 1;
  color: var(--text2);
  cursor: pointer;

  svg {
    margin-right: 0.7rem;
    color: var(--text1);
    font-size: 0.8rem;
    pointer-events: none;
  }
`;

export default ListToggle;
