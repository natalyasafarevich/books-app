import {getBooks, getCurrentBook, searchBook} from "../../api/getBooks"
import {errorOFF, errorOn} from "../error/actions";
import {loadingOff, loadingOn} from "../loading/actions";

export const SET_ALLBOOKS = 'books/SET_ALLBOOKS';
export const SET_CURRENT_BOOKS = 'books/SET_CURRENT_BOOKS';
export const SEARCH_BOOKS = 'books/SEARCH__BOOKS';
export const ADD_FAVORITES = 'favorites/ADD_FAVORITES';
export const REMOVE_FAVORITES = 'favorites/REMOVE_FAVORITES';


export function setBooks() {
    return async dispatch => {
        try {
            dispatch(loadingOn())
            const response = await getBooks();
            const dataBooks = response.data.books;
            dispatch({type: SET_ALLBOOKS, data: dataBooks})
            dispatch(loadingOff())
            dispatch(errorOFF())
        } catch (e) {
            dispatch(errorOn())
            dispatch(loadingOff())
        }
    }
}

export function setCurrentBook(isbn) {
    return async dispatch => {
        try {
            dispatch(loadingOn())
            const response = await getCurrentBook(isbn);
            const dataBook = await response.data;
            dispatch({type: SET_CURRENT_BOOKS, data: dataBook})
            dispatch(loadingOff())
            dispatch(errorOFF())
        } catch (e) {
            dispatch(errorOn())
            dispatch(loadingOff())
        }
    }
}


export function setSearchBook(name) {
    return async dispatch => {
        try {
            dispatch(loadingOn())
            const response = await searchBook(name);
            const dataBook = await response.data.books;
            dispatch({type: SEARCH_BOOKS, data: dataBook})
            dispatch(loadingOff())
            dispatch(errorOFF())
        } catch (e) {
            dispatch(errorOn())
            dispatch(loadingOff())
        }
    }
}

export function addFavoriets(books,) {
    return {type: ADD_FAVORITES, data: {
            books
        }}
}
export function removeFavoriets(index) {
    return {type: REMOVE_FAVORITES, index}
}
