import cloneDeep from "lodash.clonedeep";
import {SEARCH_BOOKS, SET_ALLBOOKS, SET_CURRENT_BOOKS} from "./actions";

const initialState = {
    books: [],
    currentBook: [],
    searchBook: []
}

export const BookReduser = (state = initialState, action) => { // console.log('aaacction',action.data)
    switch (action.type) {
        case SET_ALLBOOKS:
            {
                const newBook = action.data.map(res => {
                    return res
                })
                // console.log(newBook)

                const clone = cloneDeep(state);
                clone.books = newBook;
                return clone;
            }
        case SET_CURRENT_BOOKS:
            {
                const clone = cloneDeep(state);
                clone.currentBook = action.data;
                return clone;
            }
        case SEARCH_BOOKS:
            {
                const clone = cloneDeep(state);
                clone.searchBook = action.data;
                return clone;
            }
        default:
            return state
    }
}
