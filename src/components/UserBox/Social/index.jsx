import { useState } from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillHome } from 'react-icons/ai';
import { ImFacebook2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import styled from 'styled-components';

const Social = () => {
  const [socialInfo, setSocialInfo] = useState({
    email: '',
    github: 'daydreamplace',
    twitter: 'daydreamplace',
    facebook: 'daydreamplace',
    url: 'https://www.naver.com/',
  });

  return (
    <SocialContainer>
      <a href={`https://github.com/${socialInfo.github}`} target='_blank' className='social-link'>
        <AiFillGithub className='icon' />
      </a>
      <a href={`https://twitter.com/${socialInfo.twitter}`} target='_blank' className='social-link'>
        <AiOutlineTwitter className='icon' />
      </a>
      <a href={`https://www.facebook.com/${socialInfo.facebook}`} target='_blank' className='social-link'>
        <ImFacebook2 className='icon' />
      </a>
      <a href={socialInfo.url} target='_blank' className='social-link'>
        <AiFillHome className='icon' />
      </a>
      <a className='social-link'>
        <MdEmail className='icon' />
      </a>
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

      :hover {
        color: var(--text1);
      }
    }
  }

  .social-link + .social-link {
    margin-left: 1rem;
  }
`;

export default Social;
