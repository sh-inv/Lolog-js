import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { tabStyle } from '../../../styles/postlistnavbar';

const PeriodFilter = () => {
  const [isActiveBox, setIsActiveBox] = useState(false);
  const [filter, setFilter] = useState('이번 주');
  const [filterList, setFilterList] = useState();
  const filterRef = useRef();
  const filterBoxRef = useRef();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { filterdata },
        } = await axios.get('data/postlist/filter.json');
        setFilterList(filterdata);
      } catch (error) {
        console.log('error => ', error);
      }
    })();
  }, []);

  useEffect(() => {
    const clickOutside = e => {
      if (isActiveBox && !filterBoxRef.current.contains(e.target) && !filterRef.current.contains(e.target)) {
        setIsActiveBox(false);
      }
    };
    document.addEventListener('mousedown', clickOutside);

    return () => document.removeEventListener('mousedown', clickOutside);
  }, [isActiveBox]);

  return (
    <PeriodFilterContainer>
      <div className='trending-category' ref={filterBoxRef} onClick={() => setIsActiveBox(!isActiveBox)}>
        {filter} <MdOutlineArrowDropDown className='arrow' />
      </div>
      <Filter isActiveBox={isActiveBox}>
        <ul ref={filterRef}>
          {filterList &&
            filterList.map((filter, i) => (
              <li
                key={filter.name}
                className={filter.view ? 'active' : ''}
                onClick={() => {
                  let arr = [...filterList];
                  arr.forEach(filter => (filter.view = false));
                  arr[i].view = true;
                  setFilterList(arr);
                  setFilter(filter.name);
                  setIsActiveBox(false);
                }}
              >
                {filter.name}
              </li>
            ))}
        </ul>
      </Filter>
    </PeriodFilterContainer>
  );
};

const PeriodFilterContainer = styled.div`
  .trending-category {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 6rem;
    height: 2rem;
    padding: 0 0.5rem;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 5%) 0 0 4px;
    background: var(--new-post-btn-background);
    color: var(--postlist-navbar-filter-color);
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;

    .arrow {
      width: 23px;
      height: 20px;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

const Filter = styled.div`
  ${tabStyle}
  opacity: ${({ isActiveBox }) => (isActiveBox ? '1' : '0')};
  transform: ${({ isActiveBox }) => (isActiveBox ? 'scale(1)' : 'scale(0)')};
  top: 100%;

  ul {
    li {
      border-top: 1px solid var(--post-border-top);
      padding: 0.9rem 1rem;
      font-weight: 600;
      font-size: 0.875rem;
      cursor: pointer;

      &:nth-child(1) {
        border: none;
      }

      &:hover {
        color: var(--a-tag-hover-text);
      }
    }

    .active {
      color: var(--a-tag-hover-text);
    }
  }
`;

export default PeriodFilter;
