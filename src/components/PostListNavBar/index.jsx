import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darkModeFontColor, darkModeTextColor } from '../../styles/color';
import { SlGraph } from 'react-icons/sl';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';
import Period from './Period';

const PostListNavBar = () => {
  return (
    <PostListNavBarBox>
      <div className='nav'>
        <div className='nav-tab'>
          <Link to='/' className='tab-btn'>
            <SlGraph className='icon' />
            트렌딩
          </Link>
          <Link to='/recent' className='tab-btn'>
            <AiOutlineClockCircle className='icon' />
            최신
          </Link>
        </div>
        <Period />
      </div>
      <div>
        <FiMoreVertical className='icon' />
      </div>
    </PostListNavBarBox>
  );
};

const PostListNavBarBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;

  .icon {
    font-size: 1.4rem;
    margin-right: 0.5rem;
  }
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
        color: ${darkModeTextColor};
      }

      .active {
        color: ${darkModeFontColor};
      }
    }
  }
`;

export default PostListNavBar;
