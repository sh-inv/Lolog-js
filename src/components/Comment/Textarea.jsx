import styled from 'styled-components';

const Textarea = ({ setIsModify, isModify }) => {
  const cancelHandler = () => {
    setIsModify(false);
  };

  return (
    <TextareaContainer>
      <textarea
        className='textarea'
        rows={1}
        placeholder='댓글을 작성하세요'
        onChange={e => {
          e.target.style.height = e.target.scrollHeight + 'px';
        }}
      />
      <div className='buttons-wrapper'>
        {isModify && (
          <button className='btn cancle' onClick={cancelHandler}>
            취소
          </button>
        )}
        <button className='btn upload'>댓글 {isModify ? '수정' : '작성'}</button>
      </div>
    </TextareaContainer>
  );
};

const TextareaContainer = styled.div`
  .textarea {
    resize: none;
    width: 100%;
    min-height: 6.125rem;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border: 1px solid var(--border4);
    border-radius: 4px;
    outline: none;
    background: var(--bg-element1);
    font-size: 1rem;
    line-height: 1.75;
    color: var(--text1);
    overflow: hidden;
  }

  .buttons-wrapper {
    display: flex;
    align-items: center;
    justify-content: end;

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      cursor: pointer;
      outline: none;
      border: none;
      border-radius: 4px;
      padding: 0 1.25rem;
      height: 2rem;
      font-size: 1rem;
    }

    .cancle {
      background: none;
      color: var(--primary1);

      &:hover {
        background: #ffffff1a;
      }
    }

    .upload {
      margin-left: 0.5rem;
      background: var(--primary1);
      color: var(--button-text);

      &:hover {
        background: var(--primary2);
      }
    }
  }
`;

export default Textarea;
