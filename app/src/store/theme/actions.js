export const THEME_LIGHT = 'theme/THEME_LIGHT';
export const THEME_DARK = 'theme/THEME_DARK';

export function  setThemeLight() {

    return {type: THEME_LIGHT}
}
export function setThemeDark() {
    return {type: THEME_DARK}
}
