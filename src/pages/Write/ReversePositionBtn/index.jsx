import { useDispatch } from 'react-redux';
import { reversePosition } from '../../../store/modules/write';
import { FaExchangeAlt } from 'react-icons/fa';
import styled from 'styled-components';

const ReversePositionBtn = () => {
  const dispatch = useDispatch();

  return (
    <ReversePositionBtnContainer className='reverse-position-btn-container'>
      <FaExchangeAlt onClick={() => dispatch(reversePosition())} />
    </ReversePositionBtnContainer>
  );
};

const ReversePositionBtnContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 1rem;
  top: 1rem;
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
