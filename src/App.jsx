import GlobalStyle from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import { Header } from './layout';
import Search from './pages/Search';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </>
  );
};

export default App;
