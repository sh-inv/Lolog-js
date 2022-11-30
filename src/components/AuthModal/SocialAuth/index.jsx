import { Link } from 'react-router-dom';
import { AiOutlineGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import styled from 'styled-components';

const SocialAuth = () => {
  return (
    <SocialAuthContainer>
      <Link className='github' tabIndex='7'>
        <AiOutlineGithub />
      </Link>
      <Link className='google' tabIndex='8'>
        <FcGoogle />
      </Link>
      <Link className='facebook' tabIndex='9'>
        <FaFacebookF />
      </Link>
    </SocialAuthContainer>
  );
};

const SocialAuthContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;

  svg {
    font-size: 20px;
  }

  .github {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;

    background: rgb(39, 46, 51);
    border-radius: 1.5rem;
    outline: none;
    transition: all 0.125s ease-in 0s;
    color: #fff;
  }

  .google {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;

    background: #fff;
    border-radius: 1.5rem;
    outline: none;
    transition: all 0.125s ease-in 0s;
    color: fff;
    border: 1px solid var(--border3);
  }

  .facebook {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;

    background: rgb(59, 89, 152);
    border-radius: 1.5rem;
    outline: none;
    transition: all 0.125s ease-in 0s;
    color: #fff;
  }
`;

export default SocialAuth;
