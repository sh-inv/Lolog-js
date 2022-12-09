import { useState } from 'react';
import { GiShare } from 'react-icons/gi';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { FiPaperclip } from 'react-icons/fi';
import styled from 'styled-components';

const Share = () => {
  const [isShare, setIsShare] = useState(false);

  const changeShare = () => {
    setIsShare(!isShare);
  };

  return (
    <ShareContainer isShare={isShare}>
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
    </ShareContainer>
  );
};

const ShareContainer = styled.div`
  .share-child-positioner {
    position: relative;
    top: 28px;
    left: 20px;

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
`;

export default Share;
