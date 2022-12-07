import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { GiShare } from 'react-icons/gi';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { FiPaperclip } from 'react-icons/fi';
import styled from 'styled-components';

const LikeAndShare = ({ ScrollActive }) => {
  const [isShare, setIsShare] = useState(false);

  const changeLike = e => {
    const isLike = e.target.className.includes('active');
    isLike ? (e.target.className = 'snb-icon') : (e.target.className = 'snb-icon active');
  };

  const changeShare = () => {
    setIsShare(!isShare);
  };

  return (
    <LikeAndShareContainer isShare={isShare}>
      <div className={ScrollActive ? 'left-snb-content fixed' : 'left-snb-content'}>
        <div className='snb-icon' onClick={changeLike}>
          <FaHeart />
        </div>
        <div className='like-count'>98</div>
        <div className='share-child-positioner'>
          <div className='snb-icon facebook'>
            <BsFacebook />
          </div>
          <div className='snb-icon twitter'>
            <BsTwitter />
          </div>
          <div className='snb-icon clip'>
            <FiPaperclip />
          </div>
        </div>
        <div className='snb-icon' onClick={changeShare}>
          <GiShare />
        </div>
      </div>
    </LikeAndShareContainer>
  );
};

const LikeAndShareContainer = styled.div`
  position: absolute;
  left: -7rem;
  .left-snb-content {
    width: 4rem;
    background: var(--bg-element2);
    border: 1px solid var(--border4);
    border-radius: 2rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;

    .snb-icon {
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
    .share-child-positioner {
      position: relative;
      top: 28px;

      .facebook,
      .twitter,
      .clip {
        position: absolute;
        top: 0px;
        left: 0px;
        transition: all 0.3s;
        width: ${props => (props.isShare ? '48px' : '0')};
        height: ${props => (props.isShare ? '48px' : '0')};
        opacity: ${props => (props.isShare ? '1' : '0')};
      }
      .facebook {
        transform: ${props => (props.isShare ? 'translate(24px, -80px)' : 'translate(-24px)')};
      }
      .twitter {
        transform: ${props => (props.isShare ? 'translate(52px, -28px)' : 'translate(-24px)')};
      }
      .clip {
        transform: ${props => (props.isShare ? 'translate(24px, 24px)' : 'translate(-24px)')};
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
`;

export default LikeAndShare;
