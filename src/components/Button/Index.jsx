import styled from 'styled-components';

const Button = ({ color, onClick, text, icon, ...props }) => {
  return (
    <ButtonContainer color={color} onClick={onClick} {...props}>
      {text} {icon}
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

  outline: none;
  border: none;
  border-radius: 4px;
  background: ${props => props.color === 'teal' && 'var(--primary1)'};
  background: ${props => props.color === 'transparent' && 'transparent'};
  background: ${props => props.color === 'gray' && 'var(--bg-element4)'};
  background: ${props => props.color === 'red' && 'var(--destructive1)'};
  background: ${props => props.color === 'darkgray' && 'var(--bg-element9)'};
  color: ${props => props.color === 'teal' && 'var(--button-text)'};
  color: ${props => props.color === 'transparent' && 'var(--primary1)'};
  color: ${props => props.color === 'gray' && 'var(--text1)'};
  color: ${props => props.color === 'red' && 'var(--button-text)'};
  color: ${props => props.color === 'darkgray' && 'var(--button-text)'};
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background: ${props => props.color === 'teal' && 'var(--primary2)'};
    background: ${props => props.color === 'transparent' && 'var(--slight-layer)'};
    background: ${props => props.color === 'gray' && 'var(--prism-code-1)'};
    background: ${props => props.color === 'red' && 'var(--destructive2)'};
    background: ${props => props.color === 'darkgray' && 'var(--prism-code-1)'};
    cursor: pointer;
  }
`;

export default Button;
