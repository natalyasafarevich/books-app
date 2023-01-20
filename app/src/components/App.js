import './App.css';
import {Header} from './header/Header';
import {Routes, Route} from "react-router-dom";
import './Normalize.css';
import {BookDescription} from './pages/bookDescription/BookDescription';
import Main from './pages/mainPage/MainPage';

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
                </Routes>
            </div>
        </div>
    );
}

export default App;
