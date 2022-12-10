import { MdPlaylistAdd } from 'react-icons/md';
import styled from 'styled-components';

const Before = ({ getSeriesList }) => {
  return (
    <BeforeContainer onClick={getSeriesList}>
      <MdPlaylistAdd />
      시리즈에 추가하기
    </BeforeContainer>
  );
};

const BeforeContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  color: var(--primary2);
  font-size: 1.125rem;
  font-weight: 600;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  svg {
    font-size: 1.6rem;
    margin-right: 1rem;
  }
`;

export default Before;
