import {getBooks, getCurrentBook} from "../../api/getBooks"
import {loadingOff, loadingOn} from "../loading/actions";

export const SET_ALLBOOKS = 'books/SET_ALLBOOKS';
export const SET_CURRENT_BOOKS = 'books/SET_CURRENT_BOOKS';
// getCurrentBook

export function setBooks() {
    return async dispatch => {
        try {
            dispatch(loadingOn())
            const response = await getBooks();
            const dataBooks = response.data.books;
            dispatch({type: SET_ALLBOOKS, data: dataBooks})
            dispatch(loadingOff())
        } catch (e) {
            dispatch(loadingOff())
        }
    }
}

export function setCurrentBook(isbn) {
    return async dispatch => {
        try {
            dispatch(loadingOn())
            const response = await getCurrentBook(isbn);
            const dataBook =await  response.data;
            dispatch({type: SET_CURRENT_BOOKS,  data: dataBook})
            dispatch(loadingOff())
        } catch (e) {
            dispatch(loadingOff())
        }
    }
}
