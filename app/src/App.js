import './App.scss';
import {Header} from './components/header/Header';
import {Routes, Route, useParams} from "react-router-dom";
import './Normalize.css';
import {BookDescription} from './pages/bookDescription/BookDescription';
import Main from './pages/mainPage/MainPage';
import BooksPage from './pages/booksPage/BooksPage';
import NotFound from './pages/notFound/NotFound';
import FavoritesBook from './pages/favoritesBook/FavoritesBook';
import ResultsSearchPage from './pages/results-search/ResultsSearchPage';
import {useEffect} from 'react';
import {ScrollToTop} from './helper/ScrollToTop';
import {useNavigate} from 'react-router-dom';
import Notification from './components/notification/Notification';
import {useSelector} from 'react-redux';
import SearchPage from './pages/search/SearchPage';
import Load from './components/load/Load';
import Footer from './components/footer/Footer';
import Explore from './pages/explore/Explore';

function App() {
  const params = useParams()
  const theme = useSelector(state => state.theme.isLight)
  // const load = useSelector((state) => state.loading.isLoading);
  useEffect(() => {
    if (theme) {
      document.querySelector('body').setAttribute('data-theme', 'dark');
      return
    } else {
      document.querySelector('body').setAttribute('data-theme', 'light');
      return

    }

  }, [theme])
  const navigate = useNavigate()
  useEffect(() => {
    ScrollToTop()
  }, [navigate, params])
  return (
    <div className='app'>


      <Notification/>
      <div className="wrapper">
        <div className='main'>
          <Header/>

        </div>
      </div>
      <Load/>
      <Routes>
        <Route path="/"
          element={<Main/>}/>
        <Route path="/book/:isbn"
          element={<BookDescription/>}/>
        <Route path="/books/:title"
          element={<BooksPage/>}/>
        <Route path="/favorite"
          element={<FavoritesBook/>}/>
        <Route path={"/search/books-languages/:lang"}
          element={<ResultsSearchPage/>}/>
        <Route path={"/search"}
          element={<SearchPage/>}/>

        <Route path={"/search/author/:author_name"}
          element={<ResultsSearchPage/>}/>
        <Route path={"/search/:name"}
          element={<ResultsSearchPage/>}/>
        <Route path={"/search/topic/:topic"}
          element={<ResultsSearchPage/>}/>
        <Route path='*'
          element={<NotFound/>}/>
        <Route path='/explore'
          element={<Explore/>}/>
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
