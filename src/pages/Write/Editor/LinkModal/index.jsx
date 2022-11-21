import { useState } from 'react';
import styled from 'styled-components';

const LinkModal = ({ linkHandler }) => {
  const [linkValue, setLinkValue] = useState('');

  return (
    <Positioner>
      <LinkModalContainer>
        <div className='link-modal-title'>링크 등록</div>
        <form className='link-modal-register'>
          <input type='text' placeholder='URL 을 입력하세요' onChange={e => setLinkValue(e.target.value)} />
          <button type='button' value={linkValue} onClick={e => linkHandler(e.target.value)}>
            확인
          </button>
        </form>
      </LinkModalContainer>
    </Positioner>
  );
};

const Positioner = styled.div`
  position: absolute;
  z-index: 5;
`;

const LinkModalContainer = styled.div`
  width: 20rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1.5rem 1rem;
  background: var(--bg-element1);
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 4px;
  border-radius: 4px;

  .link-modal-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    font-weight: bold;
    color: var(--text1);
  }

  .link-modal-register {
    width: 100%;
    display: flex;
    align-items: center;

    input {
      flex: 1 1 0%;
      line-height: 1.5;
      margin-right: 0.5rem;
      padding: 0px;
      outline: none;
      border: none;
      border-bottom: 1px inset rgb(173, 181, 189);
      border-image: initial;
      background: transparent;
      font-size: 1rem;
      color: var(--text1);
    }

    button {
      height: 1.5rem;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      outline: none;
      border: none;
      border-radius: 0.75rem;
      background: rgb(134, 142, 150);
      font-size: 0.875rem;
      font-weight: bold;
      color: white;
      word-break: keep-all;
      transition: all 0.125s ease-in 0s;

      &:hover {
        background: rgb(173, 181, 189);
        cursor: pointer;
      }
    }
  }
`;

export default LinkModal;
