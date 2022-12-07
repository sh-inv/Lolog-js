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
    isLike ? (e.target.className = 'icon-circle-wrapper') : (e.target.className = 'icon-circle-wrapper active');
  };

  const changeShare = () => {
    setIsShare(!isShare);
  };

  return (
    <LikeAndShareContainer isShare={isShare}>
      <div className={ScrollActive ? 'like-and-share-content fixed' : 'like-and-share-content'}>
        <div className='icon-circle-wrapper' onClick={changeLike}>
          <FaHeart />
        </div>
        <div className='like-count'>98</div>
        <div className='share-child-positioner'>
          <div className='icon-circle-wrapper facebook'>
            <BsFacebook />
          </div>
          <div className='icon-circle-wrapper twitter'>
            <BsTwitter />
          </div>
          <div className='icon-circle-wrapper clip'>
            <FiPaperclip />
          </div>
        </div>
        <div className='icon-circle-wrapper' onClick={changeShare}>
          <GiShare />
        </div>
      </div>
    </LikeAndShareContainer>
  );
};

const LikeAndShareContainer = styled.div`
  position: absolute;
  left: -7rem;

  .like-and-share-content {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 4rem;
    padding: 0.5rem;
    border: 1px solid var(--border4);
    border-radius: 2rem;
    background: var(--bg-element2);

    .icon-circle-wrapper {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      border: 1px solid var(--border3);
      border-radius: 1.5rem;
      background: var(--bg-element1);
      color: var(--text3);
      z-index: 5;
      cursor: pointer;
      svg {
        width: 24px;
        height: 24px;
        pointer-events: none;
      }
      &:hover {
        border-color: var(--text1);
        color: var(--text1);
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
        border-color: rgb(56, 217, 169);
        background: rgb(56, 217, 169);
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
        width: ${props => (props.isShare ? '48px' : '0')};
        height: ${props => (props.isShare ? '48px' : '0')};
        opacity: ${props => (props.isShare ? '1' : '0')};
        transition: all 0.3s;
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
      margin-bottom: 1rem;
      color: var(--text2);
      line-height: 1;
      font-size: 0.75rem;
      font-weight: bold;
    }
  }
`;

export default LikeAndShare;
