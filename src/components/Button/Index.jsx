import styled from 'styled-components';
import { primary1 } from '../../styles/color';

const Button = ({ text, color, background, hoverBackground, hoverColor, onClick }) => {
  return (
    <Buttons onClick={onClick} text={text} color={color} background={background} hoverBackground={hoverBackground} hoverColor={hoverColor}>
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

  background: ${props => props.background};
  outline: none;
  border: none;
  border-radius: 4px;
  color: ${props => props.color};
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background: ${props => props.hoverBackground};
    color: ${props => props.hoverColor};
  }
`;

export default Button;
