import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Email = () => {
  const { user } = useSelector(state => state.user);

  return user && <EmailContainer>{user.email}</EmailContainer>;
};

const EmailContainer = styled.div`
  flex: 1 1 0%;
  font-size: 1rem;
  color: var(--text2);
  line-height: 1.5;
`;

export default Email;
