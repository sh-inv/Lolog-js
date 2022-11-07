import GlobalStyle from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Main from './pages/Main';
import { Header } from './layout';
import Search from './pages/Search';
import Setting from './pages/Setting/Index';
import Saves from './pages/Saves/Index';

const App = () => {
  const isDarkMode = useSelector(state => state.darkMode.isDarkMode);

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/recent' element={<Main />} />
        <Route path='/search' element={<Search />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/saves' element={<Saves />} />
      </Routes>
    </>
  );
};

export default App;
