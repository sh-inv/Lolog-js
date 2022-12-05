import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../../../store/modules/user';
import styled from 'styled-components';
import { apiClient } from '../../../../../api';

const Toggle = ({ checked, name }) => {
  const [toggle, setToggle] = useState(checked);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  const onAlert = async () => {
    const body = {
      comment_alert: user.comment_alert,
      update_alert: user.update_alert,
    };

    Object.assign(body, {
      [name]: Number(!toggle),
    });

    console.log(body);
    try {
      const config = {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MTAsImxvZ2luX2lkIjoieW91YmlubiIsIm5hbWUiOiLsnbvsnYAifSwiaWF0IjoxNjY5OTAzOTU1fQ.PMGvDfMgixAdeJoL1qIMbs7QRBX0PBrUlFr9SxnRYTQ`,
        },
      };
      await apiClient.patch('/users?type=alert', body, config);
      setToggle(!toggle);
      dispatch(
        setUser({
          ...user,
          [name]: Number(!toggle),
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    user && (
      <ToggleBox>
        <div className={toggle ? 'toggle-on' : 'toggle-off'} onClick={onAlert}>
          <div className='circle' />
        </div>
      </ToggleBox>
    )
  );
};

const ToggleBox = styled.div`
  .toggle-on {
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 2.875rem;
    height: 1.5rem;
    padding: 0.125rem;

    border-radius: 1.125rem;
    background: var(--primary2);
    transition: all 0.125s ease-in 0s;

    .circle {
      width: 1.25rem;
      height: 1.25rem;
      transform: translate(1.375rem);

      border-radius: 0.625rem;
      background: var(--bg-element1);
      box-shadow: rgb(0 0 0 / 10%) -2px 0px 4px;
    }
  }

  .toggle-off {
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 2.875rem;
    height: 1.5rem;
    padding: 0.125rem;

    border-radius: 1.125rem;
    background: var(--bg-element9);
    transition: all 0.125s ease-in 0s;

    .circle {
      width: 1.25rem;
      height: 1.25rem;

      border-radius: 0.625rem;
      background: var(--bg-element1);
    }
  }
`;

export default Toggle;
