import { Link } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';
import { AiOutlineGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import Button from '../../Button';
import styled from 'styled-components';
import { backgroundElement1, backgroundElement2, backgroundPage2, buttonText, primary1, text1, text2, text3, border3, border4, opaqueLayer } from '../../../styles/color';

const LoginModal = ({ title, message, link, onClose, onChange }) => {
  return (
    <>
      <Background />
      <Positioner>
        <LoginContainer>
          <div className='left-block'>
            <div className='welcome'>환영합니다!</div>
          </div>
          <div className='right-block'>
            <div className='exit'>
              <MdOutlineClose className='icon' onClick={onClose} />
            </div>
            <div className='wrapper'>
              <h2>{title}</h2>
              <section>
                <h4>이메일로 {title}</h4>
                <form>
                  <input type='text' placeholder='이메일을 입력하세요.' />
                  <input type='password' placeholder='비밀번호를 입력하세요.' />
                  {/* <button>{title}</button> */}
                  <Button className='login-button' text={title} />
                </form>
              </section>
              <section>
                <h4>소셜 계정으로 {title}</h4>
                <div className='social'>
                  <Link className='github'>
                    <AiOutlineGithub />
                  </Link>
                  <Link className='google'>
                    <FcGoogle />
                  </Link>
                  <Link className='facebook'>
                    <FaFacebookF />
                  </Link>
                </div>
              </section>
            </div>
            <div className='foot'>
              <span>{message}</span>
              <div className='link' onClick={onChange}>
                {link}
              </div>
            </div>
          </div>
        </LoginContainer>
      </Positioner>
    </>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: ${opaqueLayer};
  z-index: 10;
  animation: 0.25s ease 0s 1 normal forwards running cJoqxJ;
`;

const Positioner = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 20;
`;

const LoginContainer = styled.div`
  display: flex;
  width: 606px;
  height: 530px;
  animation: 0.4s ease-in-out 0s 1 normal forwards running cptskd;
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;

  @media screen and (max-width: 768px) {
    flex: 1 1 0%;
    width: auto;
    height: 100%;
  }

  .left-block {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 216px;
    padding: 1.5rem;
    background: ${backgroundElement2};

    @media screen and (max-width: 768px) {
      display: none;
    }

    .welcome {
      margin-top: 1.5rem;
      color: ${text2};
      text-align: center;
      font-weight: 600;
      font-size: 1.75rem;
    }
  }

  .right-block {
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background: ${backgroundPage2};

    .exit {
      display: flex;
      -webkit-box-pack: end;
      justify-content: flex-end;
      margin-bottom: 2.25rem;
      font-size: 1.5rem;
      color: ${text3};
      cursor: pointer;
    }

    .wrapper {
      flex: 1 1 0%;
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 1.3125rem;
        color: ${text1};
      }

      section {
        display: block;

        form {
          display: flex;
          flex-direction: column;
          width: 100%;

          input {
            flex: 1 1 0%;
            padding: 1rem;
            background: ${backgroundElement1};
            border: 0.5px solid ${border4};
            outline: none;
            font-size: 1rem;
            color: ${text1};

            :focus {
              border: 1px solid ${primary1};
            }
          }

          button {
            height: 3rem;
            margin-top: 10px;
            background: ${primary1};
            outline: none;
            border: none;
            color: ${buttonText};
            font-size: 1rem;
            font-weight: bold;
            word-break: keep-all;
            cursor: pointer;
          }
        }

        h4 {
          margin-top: 1rem;
          margin-bottom: 1rem;
          color: ${text3};
        }

        .social {
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
            border: 1px solid ${border3};
          }
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
      }

      section + section {
        margin-top: 1.5rem;
      }
    }

    .foot {
      text-align: right;

      span {
        margin-right: 0.25rem;
      }

      .link {
        display: inline-block;
        font-weight: bold;
        color: ${primary1};
        cursor: pointer;
      }
    }
  }
`;

export default LoginModal;
