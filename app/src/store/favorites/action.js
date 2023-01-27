export const ADD_FAVORITES = 'favorites/ADD_FAVORITES';


export function addFavoriets(books, id) {
    return {
        type: ADD_FAVORITES,
        data: {
            books,
            id
        }
    }
}
