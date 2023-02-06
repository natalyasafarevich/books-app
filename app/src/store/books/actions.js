import {getBooks} from "../../api/getBooks"

export const SET_BOOKS = 'books/SET_BOOKS'

export function setBooks() {

    return async dispatch => {
        const response = await getBooks();
        const dataBooks = response.data.books;
        dispatch({type: SET_BOOKS, data: dataBooks})
    }
}
