import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { tabStyle } from '../../../styles/postlistnavbar';
import { resetPageNum, setQuery } from '../../../store/modules/mainnavbar';

const PeriodFilter = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [filter, setFilter] = useState('이번 주');
  const dispatch = useDispatch();
  const [filterList, setFilterList] = useState([
    {
      name: '오늘',
      query: 'today',
      view: false,
    },
    {
      name: '이번 주',
      query: 'week',
      view: true,
    },
    {
      name: '이번 달',
      query: 'month',
      view: false,
    },
    {
      name: '올해',
      query: 'year',
      view: false,
    },
  ]);
  const toggleBtnRef = useRef();
  const toggleBoxRef = useRef();

  useEffect(() => {
    const clickOutside = e => {
      if (isToggle && !toggleBoxRef.current.contains(e.target) && !toggleBtnRef.current.contains(e.target)) {
        setIsToggle(false);
      }
    };
    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [isToggle]);

  return (
    <PeriodFilterContainer>
      <div className='trending-category' ref={toggleBtnRef} onClick={() => setIsToggle(!isToggle)}>
        {filter} <MdOutlineArrowDropDown className='arrow' />
      </div>
      <Filter isToggle={isToggle}>
        <ul ref={toggleBoxRef}>
          {filterList.map((filter, i) => (
            <li
              key={filter.name}
              className={filter.view ? 'active' : ''}
              onClick={() => {
                let arr = [...filterList];
                arr.forEach(filter => (filter.view = false));
                arr[i].view = true;
                setFilterList(arr);
                setFilter(filter.name);
                dispatch(resetPageNum());
                dispatch(setQuery(filter.query));
                setIsToggle(false);
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
    background: var(--bg-element1);
    color: var(--text2);
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
  opacity: ${({ isToggle }) => (isToggle ? '1' : '0')};
  transform: ${({ isToggle }) => (isToggle ? 'scale(1)' : 'scale(0)')};
  top: 100%;

  ul {
    li {
      padding: 0.9rem 1rem;
      border-top: 1px solid var(--border4);
      background-color: var(--bg-element2);
      font-weight: 600;
      font-size: 0.875rem;
      cursor: pointer;

      &:nth-child(1) {
        border: none;
      }

      &:hover {
        color: var(--primary1);
      }
    }

    .active {
      color: var(--primary1);
    }
  }
`;

export default PeriodFilter;
