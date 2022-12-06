import GlobalStyle from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Main from './pages/Main';
import { Header } from './layout';
import Search from './pages/Search';
import Setting from './pages/Setting';
import Saves from './pages/Saves';
import MyLolog from './pages/MyLolog';
import Write from './pages/Write';
import Posts from './pages/MyLolog/Posts';
import Series from './pages/MyLolog/Series';
import SeriesPostList from './pages/SeriesPostList';
import About from './pages/MyLolog/About';
import Register from './pages/Register';
import DetailPage from './pages/DetailPage';

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
        <Route path='/write' element={<Write />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/saves' element={<Saves />} />
        <Route path='/id' element={<MyLolog />}>
          <Route index element={<Posts />} />
          <Route path='series' element={<Series />} />
          <Route path='about' element={<About />} />
        </Route>
        <Route path='/id/series/:title' element={<SeriesPostList />} />
        <Route path='/posts/:post_id' element={<DetailPage />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
