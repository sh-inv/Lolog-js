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
  console.log(userInfo);

  const social = [
    { href: `https://github.com/${socialInfo.github}`, target: '_blank', icon: <AiFillGithub /> },
    { href: `https://twitter.com/${socialInfo.twitter}`, target: '_blank', icon: <AiOutlineTwitter /> },
    { href: `https://www.facebook.com/${socialInfo.facebook}`, target: '_blank', icon: <ImFacebook2 /> },
    { href: socialInfo.url, target: '_blank', icon: <AiFillHome /> },
    { href: `mailto:${socialInfo.email}`, icon: <MdEmail /> },
  ];

  return (
    <SocialContainer>
      {social.map(info => (
        <a key={info.href} href={info.href} target={info.target} className='social-link'>
          {info.icon}
        </a>
      ))}
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
