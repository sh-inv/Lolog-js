import { useState } from 'react';
import { IoChevronUp, IoChevronDown } from 'react-icons/io5';
import styled from 'styled-components';

const Sort = ({ isSort, setIsSort, onSort }) => {
  return (
    <SortContainer>
      <button onClick={onSort}>
        {isSort ? (
          <>
            <IoChevronDown /> <span>내림차순</span>
          </>
        ) : (
          <>
            <IoChevronUp /> <span>오름차순</span>
          </>
        )}
      </button>
    </SortContainer>
  );
};

const SortContainer = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  margin-top: 1rem;

  button {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    height: 2rem;
    padding-left: 0.5rem;
    padding-right: 0.75rem;

    background: var(--bg-element2);
    border-radius: 4px;
    border: none;
    outline: none;
    cursor: pointer;

    svg {
      color: var(--primary2);
      font-size: 1.5rem;
      transition: all 0.125s ease-in 0s;
    }

    span {
      margin-left: 0.25rem;
      font-size: 1rem;
      color: var(--text1);
      line-height: 1;
    }
  }
`;

export default Sort;
