export const ERROR_ON = 'error/ERROR_ON';
export const ERROR_OFF = 'error/ERROR_OFF';

export function errorOn() {
    return {type: ERROR_ON}
}
export function errorOFF() {
    return {type: ERROR_OFF}
}
