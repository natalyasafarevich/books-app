import cloneDeep from "lodash.clonedeep";
import {THEME_LIGHT, THEME_DARK} from "./actions";

const theme = localStorage.getItem("isLigthTheme");
const defaultState = {
  isLight: JSON.parse(theme) 
}


export const ThemeReduser = (state = defaultState, action) => {
  switch (action.type) {
    case THEME_LIGHT:
      {

        const clone = cloneDeep(state);
        clone.isLight = true;
        return clone
      }
    case THEME_DARK:

      {
        const clone = cloneDeep(state);
        clone.isLight = false;
        return clone
      }

    default:
      return state
  }
}
