import {combineReducers} from "redux";
import {favoritesReduser} from "./favorites/reducer";


export const rootReduser = combineReducers({favoritesReduser})
