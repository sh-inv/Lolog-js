import styled from 'styled-components';

const Button = ({ text, onClick, className, ...props }) => {
  return (
    <ButtonContainer onClick={onClick} className={className} text={text} {...props}>
      {text}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 2rem;
  padding: 0px 1.25rem;

  background-color: var(--primary1);
  outline: none;
  border: none;
  border-radius: 4px;
  color: var(--button-text);
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background: var(--primary2);
    color: var(--button-text);
  }
`;

export default Button;
