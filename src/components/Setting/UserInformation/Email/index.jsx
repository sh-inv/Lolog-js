import styled from 'styled-components';
import { text2 } from '../../../../styles/color';

const Email = () => {
  return <EmailContainer>you8inpark@gmail.com</EmailContainer>;
};

const EmailContainer = styled.div`
  flex: 1 1 0%;
  font-size: 1rem;
  color: ${text2};
  line-height: 1.5;
`;

export default Email;
