import './App.css';
import {Header} from './header/Header';
import {Routes, Route} from "react-router-dom";
import './Normalize.css';
import {BookDescription} from './pages/bookDescription/BookDescription';
import Main from './pages/mainPage/MainPage';
import BooksPage from './pages/booksPage/BooksPage';
import NotFound from './pages/notFound/NotFound';

function App() {
    return (
        <div className="wrapper">
            <div className='main'>
                <Header/>
                <Routes>
                    <Route path="/book/:isbn"
                        element={<BookDescription/>}/>
                    <Route path="/"
                        element={<Main/>}/>
                    <Route path="/books/:title"
                        element={<BooksPage/>}/>
                    <Route path='*'
                        element={<NotFound/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
