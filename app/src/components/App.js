import './App.css';
import {Header} from './header/Header';

import './Normalize.css';
import {Preview} from './preview/Preview';
import {useEffect, useState} from 'react';
import {СategoriesPage} from './categoriesPage/СategoriesPage';


function App() { // console.log(response)
    return (<div className="wrapper">
        <div className='main'>
            <Header/>
            <Preview/>
            <СategoriesPage/> {/* <Categories/> */} </div>
    </div>);
}

export default App;
