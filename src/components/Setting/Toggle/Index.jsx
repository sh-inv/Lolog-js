import { useState } from 'react';
import styled from 'styled-components';

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
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
