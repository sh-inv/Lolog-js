import { AiFillGithub, AiOutlineTwitter, AiFillHome } from 'react-icons/ai';
import { ImFacebook2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import styled from 'styled-components';

const Social = ({ userInfo }) => {
  const socialInfo = {
    email: userInfo.social_info_email,
    github: userInfo.social_info_github,
    twitter: userInfo.social_info_twitter,
    facebook: userInfo.social_info_facebook,
    url: userInfo.social_info_url,
  };

  return (
    <SocialContainer>
      {socialInfo.github && (
        <a href={`https://github.com/${socialInfo.github}`} target='_blank' className='social-link'>
          <AiFillGithub />
        </a>
      )}
      {socialInfo.twitter && (
        <a href={`https://twitter.com/${socialInfo.twitter}`} target='_blank' className='social-link'>
          <AiOutlineTwitter />
        </a>
      )}
      {socialInfo.facebook && (
        <a href={`https://facebook.com/${socialInfo.facebook}`} target='_blank' className='social-link'>
          <ImFacebook2 />
        </a>
      )}
      {socialInfo.url && (
        <a href={`https://${socialInfo.url}`} target='_blank' className='social-link'>
          <AiFillHome />
        </a>
      )}
      {socialInfo.email && (
        <a href={`mailto:${socialInfo.email}`} className='social-link'>
          <MdEmail />
        </a>
      )}
    </SocialContainer>
  );
};

const SocialContainer = styled.div`
  display: flex;
  color: var(--text3);

  .social-link {
    display: block;
    color: inherit;

    svg {
      font-size: 2rem;
      cursor: pointer;

      @media screen and (max-width: 768px) {
        font-size: 1.5rem;
      }

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
