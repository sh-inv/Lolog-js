import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setUser } from '../../../../../store/modules/user';

const Toggle = ({ checked = false, name }) => {
  const [toggle, setToggle] = useState(checked);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const onToggle = async () => {
    const body = {
      comment_alert: user?.comment_alert,
      update_alert: user?.update_alert,
    };

    Object.assign(body, {
      [name]: !toggle,
    });
    console.log(body);
    // fetch

    setToggle(!toggle);
    dispatch(
      setUser({
        ...user,
        [name]: !toggle,
      })
    );
  };

  return (
    <ToggleBox>
      <div className={toggle ? 'toggle-on' : 'toggle-off'} onClick={onToggle}>
        <div className='circle' />
      </div>
    </ToggleBox>
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
