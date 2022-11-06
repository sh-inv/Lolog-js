import GlobalStyle from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Main from './pages/Main';
import { Header } from './layout';
import Search from './pages/Search';

const App = () => {
  const isDarkMode = useSelector(state => state.darkMode.isDarkMode);

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </>
  );
};

export default App;
