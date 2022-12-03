import { FaHeart } from 'react-icons/fa';
import { GiShare } from 'react-icons/gi';
import styled from 'styled-components';

const Snbs = () => {
  const changeLike = e => {
    const isLike = e.target.className.includes('active');
    isLike ? (e.target.className = 'like-icon') : (e.target.className = 'like-icon active');
  };

  return (
    <SnbsPositioner>
      <div className='left-snb'>
        <div className='left-snb-content'>
          <div className='like-icon' onClick={changeLike}>
            <FaHeart />
          </div>
          <div className='like-count'>98</div>
          <div className='share-icon'>
            <GiShare />
          </div>
        </div>
      </div>
      <div className='right-snb'>
        <div className='right-snb-content'>
          <div style={{ marginLeft: '0px' }}>
            <a href=''>10월</a>
          </div>
          <div style={{ marginLeft: '12px' }}>
            <a href=''>많은 면접을 보며 느낀 점</a>
          </div>
          <div style={{ marginLeft: '24px' }}>
            <a href=''>두둥탁</a>
          </div>
        </div>
      </div>
    </SnbsPositioner>
  );
};

const SnbsPositioner = styled.div`
  position: relative;
  margin-top: 2rem;
  .left-snb {
    position: absolute;
    left: -7rem;
    .left-snb-content {
      position: fixed;
      top: 112px;
      width: 4rem;
      background: var(--bg-element2);
      border: 1px solid var(--border4);
      border-radius: 2rem;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      -webkit-box-align: center;
      align-items: center;

      .like-icon,
      .share-icon {
        height: 3rem;
        width: 3rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        background: var(--bg-element1);
        border: 1px solid var(--border3);
        border-radius: 1.5rem;
        color: var(--text3);
        cursor: pointer;
        z-index: 5;

        svg {
          width: 24px;
          height: 24px;
          pointer-events: none;
        }
        &:hover {
          color: var(--text1);
          border-color: var(--text1);
        }
      }

      @keyframes spring {
        from {
          transform: scale(1);
        }
        50% {
          transform: scale(1.3);
        }
        to {
          transform: scale(1);
        }
      }

      .active {
        animation: spring 0.25s 2;
        border-color: var(--primary2);
        background: var(--primary2);
        color: var(--button-text);
        &:hover {
          background: rgb(56, 217, 169);
          border-color: rgb(56, 217, 169);
          color: var(--button-text);
        }
      }

      .like-count {
        margin-top: 0.5rem;
        color: var(--text2);
        line-height: 1;
        font-size: 0.75rem;
        margin-bottom: 1rem;
        font-weight: bold;
      }
    }
  }
  .right-snb {
    position: absolute;
    left: 100%;
    .right-snb-content {
      position: fixed;
      top: 112px;
      width: 240px;
      margin-left: 5rem;
      border-left: 2px solid var(--border4);
      padding: 0.25rem 0.75rem;
      color: var(--text3);
      line-height: 1.5;
      font-size: 0.875rem;
      max-height: calc(100vh - 128px);
      overflow: hidden auto;
      a {
        color: inherit;
      }
    }
  }
`;

export default Snbs;
