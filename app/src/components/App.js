import './App.css';
import {Header} from './header/Header';
import {Routes, Route} from "react-router-dom";
import './Normalize.css';
import {BookDescription} from './pages/bookDescription/BookDescription';
import Main from './pages/mainPage/MainPage';
import BooksPage from './pages/booksPage/BooksPage';
import NotFound from './pages/notFound/NotFound';
import FavoritesBook from './pages/favoritesBook/FavoritesBook';
import ResultsSearchPage from './pages/results-search/ResultsSearchPage';

function App() {
  return (
    <div className="wrapper">
      <div className='main'>
        <Header/>
        <Routes>
          <Route path="/"
            element={<Main/>}/>
          <Route path="/book/:isbn"
            element={<BookDescription/>}/>
          <Route path="/books/:title"
            element={<BooksPage/>}/>
          <Route path="/favorite"
            element={<FavoritesBook/>}/>
             <Route path="/search/:name"
            element={<ResultsSearchPage/>}/>
          <Route path='*'
            element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
