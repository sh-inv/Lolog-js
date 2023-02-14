import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from './pages/Main';
import { Header } from './layout';
import Search from './pages/Search';
import Setting from './pages/Setting';
import Saves from './pages/Saves';
import MyLolog from './pages/MyLolog';
import Write from './pages/Write';
import MyLologPosts from './pages/MyLolog/MyLologPosts';
import Series from './pages/MyLolog/Series';
import About from './pages/MyLolog/About';
import SeriesPostList from './pages/SeriesPostList';
import Register from './pages/Register';
import DetailPage from './pages/DetailPage';
import Follow from './pages/Follow';
import GoogleAuth from './components/AuthModal/SocialAuth/GoogleAuth';
import GlobalStyle from './GlobalStyle';

const App = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem('authToken');

  useEffect(() => {
    if (!token && (location.pathname === '/follow-list' || '/saves' || '/setting' || 'write')) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/recent' element={<Main />} />
        <Route path='/follow' element={<Main />} />
        <Route path='/search' element={<Search />} />
        <Route path='/write' element={<Write />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/saves' element={<Saves />} />
        <Route path='/:id' element={<MyLolog />}>
          <Route index element={<MyLologPosts />} />
          <Route path='series' element={<Series />} />
          <Route path='about' element={<About />} />
        </Route>
        <Route path='/:id/series/:postid' element={<SeriesPostList />} />
        <Route path='/posts/:postid' element={<DetailPage />} />
        <Route path='/register' element={<Register />}>
          <Route path='google' element={<Register />} />
        </Route>
        <Route path='/follow-list' element={<Follow />} />
        <Route path='/auth/google/callback' element={<GoogleAuth />} />
      </Routes>
    </>
  );
};

export default App;
