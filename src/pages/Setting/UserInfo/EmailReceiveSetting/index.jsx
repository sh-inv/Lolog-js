import { useSelector, useDispatch } from 'react-redux';
import Toggle from './Toggle';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

const EmailReceiveSetting = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const commentAlert = user?.comment_alert;
  const updateAlert = user?.update_alert;

  return (
    <EmailReceiveSettingContainer>
      <ul>
        <li>
          <span className='alert'>댓글 알림</span>
          <Toggle true={commentAlert === 1} />
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
