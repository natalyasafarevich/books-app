import {ADD_FAVORITES} from "./action";


const initialState = {
    favorites: []
}


export const favoritesReduser = (state = initialState, action) => {
    console.log('action >>>', action);

    switch (action.type) {
        case ADD_FAVORITES:
            {
                return {
                    ...state,
                    favorites: [
                        ...state.favorites,
                        action.data,
                    ]
                }
            }
        default:
            return state
    }

}
