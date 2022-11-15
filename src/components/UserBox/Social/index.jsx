import { Link } from 'react-router-dom';
import { AiFillGithub, AiOutlineTwitter, AiFillHome } from 'react-icons/ai';
import { ImFacebook2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import styled from 'styled-components';

const Social = () => {
  return (
    <SocialContainer>
      <Link className='social-link'>
        <AiFillGithub className='icon' />
      </Link>
      <Link className='social-link'>
        <AiOutlineTwitter className='icon' />
      </Link>
      <Link className='social-link'>
        <ImFacebook2 className='icon' />
      </Link>
      <Link className='social-link'>
        <AiFillHome className='icon' />
      </Link>
      <Link className='social-link'>
        <MdEmail className='icon' />
      </Link>
    </SocialContainer>
  );
};

const SocialContainer = styled.div`
  display: flex;
  color: var(--text3);

  .social-link {
    display: block;
    color: inherit;

    .icon {
      font-size: 2rem;
      cursor: pointer;
    }
  }

  .social-link + .social-link {
    margin-left: 1rem;
  }
`;

export default Social;
