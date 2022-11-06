import GlobalStyle from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Header from './layout';
import Setting from './pages/Setting/Index';
import Saves from './pages/Saves/Index';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/saves' element={<Saves />} />
      </Routes>
    </>
  );
};

export default App;
