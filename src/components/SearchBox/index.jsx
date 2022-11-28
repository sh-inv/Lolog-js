import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

const SearchBox = ({ width }) => {
  return (
    <SearchBoxContainer className='search-box-container' width={width}>
      <BiSearch className='search-box-icon' />
      <input className='search-box-input' type='text' placeholder='검색어를 입력하세요' />
    </SearchBoxContainer>
  );
};

const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  width: ${props => props.width};
  border: 1px solid #a0a0a0;
  transition: all 0.125s ease-in 0s;

  :focus-within {
    border-color: var(--text1);
  }

  .search-box-icon {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
  }

  .search-box-input {
    width: 100%;
    line-height: 2rem;
    font-size: 1.5rem;
    border: none;
    color: var(--text1);
    background-color: transparent;
    cursor: text;
  }
`;

export default SearchBox;
