import styled from 'styled-components';

const SortButton = ({ icon, text, onClick }) => {
  return (
    <SortButtonContainer text={text} onClick={onClick}>
      {icon}
      <span>{text}</span>
    </SortButtonContainer>
  );
};

const SortButtonContainer = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  height: 2rem;
  padding-left: 0.5rem;
  padding-right: 0.75rem;

  background: var(--bg-element2);
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;

  svg {
    color: var(--primary2);
    font-size: 1.5rem;
    transition: all 0.125s ease-in 0s;
  }

  span {
    margin-left: 0.25rem;
    font-size: 1rem;
    color: var(--text1);
    line-height: 1;
  }
`;

export default SortButton;
