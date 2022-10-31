import GlobalStyle from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Header from './layout';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
