import './App.css';
import {Header} from './header/Header';


import './Normalize.css';
import {Preview} from './preview/Preview';
import {useEffect, useState} from 'react';
import BooksPage from './pages/booksPage/booksPage';
import {DescriptionBook} from './pages/descriptionBook/DescriptionBook';
// import {СategoriesPage} from './categoriesPage/СategoriesPage';


function App() { // console.log(response)
    return (
        <div className="wrapper">
            <div className='main'>
                <Header/>
                 {/* <Preview/>
                */}
                {/* <BooksPage/>  */}
                {/* <DescriptionBook/> */}
                <BooksPage/>
            </div>
        </div>
    );
}

export default App;
