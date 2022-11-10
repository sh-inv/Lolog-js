import styled from 'styled-components';
import { primary1, primary2 } from '../../styles/color';

const Button = ({ text, backgroundColor, color, hoverBackground, hoverColor, ...resetProps }) => {
  return (
    <Buttons text={text} backgroundColor={backgroundColor} color={color} {...resetProps}>
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

  background-color: ${primary1};
  outline: none;
  border: none;
  border-radius: 4px;
  color: ${props => props.color};
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background: ${primary2};
    color: ${props => props.hoverColor};
  }
`;

export default Button;
