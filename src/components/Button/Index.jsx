import styled from 'styled-components';

const Button = ({ text, onClick, ...props }) => {
  return (
    <Buttons onClick={onClick} text={text} {...props}>
      {text}
    </Buttons>
  );
};

const Buttons = styled.button`
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
    color: ${props => props.hoverColor};
  }
`;

export default Button;
