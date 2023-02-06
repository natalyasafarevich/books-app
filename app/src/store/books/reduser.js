import cloneDeep from "lodash.clonedeep";
import {SET_BOOKS} from "./actions";

const initialState = {
    books: []
}

export const BookReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_BOOKS:
            {
                const newBook = action.data.map(res => {
                    return res
                })

                const clone = cloneDeep(state);
                clone.books =newBook;
                return clone;
            }
        default:
            return state
    }
}
