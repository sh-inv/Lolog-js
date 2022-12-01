import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Toggle from './Toggle';

const EmailReceiveSetting = () => {
  const { user } = useSelector(state => state.user);

  return (
    user && (
      <EmailReceiveSettingContainer>
        <ul>
          <li>
            <span className='alert'>댓글 알림</span>
            <Toggle name='comment_alert' checked={user.comment_alert} />
          </li>
          <li>
            <span className='alert'>벨로그 업데이트 소식</span>
            <Toggle name='update_alert' checked={user.update_alert} />
          </li>
        </ul>
      </EmailReceiveSettingContainer>
    )
  );
};

const EmailReceiveSettingContainer = styled.div`
  flex: 1 1 0%;
  font-size: 1rem;
  color: var(--text2);
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
