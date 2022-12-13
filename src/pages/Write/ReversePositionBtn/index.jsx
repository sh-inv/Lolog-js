import { useSelector, useDispatch } from 'react-redux';
import { setWriteContent } from '../../../store/modules/write';
import { FaExchangeAlt } from 'react-icons/fa';
import styled from 'styled-components';

const ReversePositionBtn = () => {
  const { isReverse } = useSelector(state => state.writeContent);
  const dispatch = useDispatch();

  return (
    <ReversePositionBtnContainer className='reverse-position-btn-container' isReverse={isReverse}>
      <FaExchangeAlt onClick={() => dispatch(setWriteContent({ type: 'isReverse', value: !isReverse }))} />
    </ReversePositionBtnContainer>
  );
};

const ReversePositionBtnContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 1rem;
  left: ${props => (props.isReverse ? '45%' : '52%')};
  width: 2rem;
  height: 2rem;
  outline: 0;
  border: 0;
  background-color: inherit;
  color: var(--text3);
  font-size: 1rem;

  &:hover {
    color: var(--text1);
    cursor: pointer;
  }
`;

export default ReversePositionBtn;
