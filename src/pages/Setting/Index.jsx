import { useState } from 'react';
import UserProfile from '../../components/Setting/UserProfile/Index';
import UserContents from '../../components/Setting/UserContents/Index';
import styled from 'styled-components';

const Setting = () => {
  const [modify, setModify] = useState(false);

  const onModify = () => {
    if (!modify) {
      setModify(true);
      return;
    }
    setModify(false);
  };

  return (
    <SettingPage>
      <UserProfile modify={modify} setModify={setModify} onModify={onModify} />
      <UserContents modify={modify} setModify={setModify} onModify={onModify} />
    </SettingPage>
  );
};

const SettingPage = styled.div`
  width: 768px;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 5rem;
`;

export default Setting;
