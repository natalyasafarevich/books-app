import './App.css';
import {Header} from './components/header/Header';
import {Routes, Route} from "react-router-dom";
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

function App() {
  const theme = useSelector(state => state.theme.isLight)
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
  }, [navigate])
  return (
    <>
<Notification/>
      <div className="wrapper">
        <div className='main'>
          <Header/>
        </div>
      </div>
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
        <Route path={"/search/author/:author_name"}
          element={<ResultsSearchPage/>}/>
        <Route path={"/search/:name"}
          element={<ResultsSearchPage/>}/>
        <Route path='*'
          element={<NotFound/>}/>
      </Routes>
    </>

  );
}

export default App;
