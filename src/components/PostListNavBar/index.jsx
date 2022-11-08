import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { SlGraph } from 'react-icons/sl';
import { AiOutlineClockCircle } from 'react-icons/ai';

const PostListNavBar = () => {
  return (
    <PostListNavBarBox>
      <div className='nav'>
        <div className='nav-tab'>
          <Link to='' className='tab-btn active'>
            <SlGraph className='icon' />
            트렌딩
          </Link>
          <Link to='' className='tab-btn passive'>
            <AiOutlineClockCircle className='icon' />
            최신
          </Link>
        </div>
        <div className='trending-category'>
          이번 주 <MdOutlineArrowDropDown className='arrow' />
        </div>
        <div className='filter'>
          <ul>
            <li className=''>오늘</li>
            <li className='active'>이번 주</li>
            <li className=''>이번 달</li>
            <li className=''>올해</li>
          </ul>
        </div>
      </div>
      <div></div>
    </PostListNavBarBox>
  );
};

const PostListNavBarBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;

  .nav {
    position: relative;
    display: flex;
    align-items: center;

    .nav-tab {
      display: flex;
      width: 14rem;

      .tab-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 7rem;
        height: 3rem;
        margin: 0;
        font-size: 1.125rem;
        color: #d9d9d9;

        .icon {
          font-size: 1.4rem;
          margin-right: 0.5rem;
        }
      }

      .active {
        color: var(--text);
      }
    }

    .trending-category {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 6rem;
      height: 2rem;
      padding: 0 0.5rem;
      border-radius: 4px;
      background: #1e1e1e;
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

    .filter {
      position: absolute;
      top: 100%;
      right: 0;
      z-index: 5;
      margin-top: 0.5rem;
      width: 12rem;
      background: #1e1e1e;
      opacity: 1;
      transform: scale(1);
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
    }
  }
`;

export default PostListNavBar;
