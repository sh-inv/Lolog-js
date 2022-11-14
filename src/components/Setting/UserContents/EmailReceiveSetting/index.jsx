import Toggle from './Toggle';
import styled from 'styled-components';
import { text2 } from '../../../../styles/color';

const EmailReceiveSetting = () => {
  return (
    <EmailReceiveSettingContainer>
      <ul>
        <li>
          <span className='alert'>댓글 알림</span>
          <Toggle />
        </li>
        <li>
          <span className='alert'>벨로그 업데이트 소식</span>
          <Toggle />
        </li>
      </ul>
    </EmailReceiveSettingContainer>
  );
};

const EmailReceiveSettingContainer = styled.div`
  flex: 1 1 0%;
  font-size: 1rem;
  color: ${text2};
  line-height: 1.5;

  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;

    li {
      display: flex;
      -webkit-box-align: center;
      align-items: center;

      .alert {
        width: 14rem;
      }
    }

    li + li {
      margin-top: 0.5rem;
    }
  }
`;

export default EmailReceiveSetting;
