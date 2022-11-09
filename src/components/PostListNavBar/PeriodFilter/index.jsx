import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { MdOutlineArrowDropDown } from 'react-icons/md';

const PeriodFilter = () => {
  const [activeFilter, setActiveFilter] = useState(false);
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
      if (activeFilter && !filterBoxRef.current.contains(e.target) && !filterRef.current.contains(e.target)) {
        setActiveFilter(false);
      }
    };
    document.addEventListener('mousedown', clickOutside);

    return () => document.removeEventListener('mousedown', clickOutside);
  }, [activeFilter]);

  return (
    <PeriodFilterContainer>
      <div className='trending-category' ref={filterBoxRef} onClick={() => setActiveFilter(!activeFilter)}>
        {filter} <MdOutlineArrowDropDown className='arrow' />
      </div>
      <Filter activeFilter={activeFilter}>
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
                  setActiveFilter(false);
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
    background: var(--new-post-btn-background);
    color: #d9d9d9;
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
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 5;
  margin-top: 0.5rem;
  width: 12rem;
  background: var(--new-post-btn-background);
  opacity: ${({ activeFilter }) => (activeFilter ? '1' : '0')};
  transform: ${({ activeFilter }) => (activeFilter ? 'scale(1)' : 'scale(0)')};
  transition: 0.3s;
  transform-origin: right top;

  ul {
    li {
      border-top: 1px solid #2a2a2a;
      padding: 0.9rem 1rem;
      font-weight: 600;
      font-size: 0.875rem;
      cursor: pointer;

      &:nth-child(1) {
        border: none;
      }

      &:hover {
        color: #96f2d7;
      }
    }

    .active {
      color: #96f2d7;
    }
  }
`;

export default PeriodFilter;
