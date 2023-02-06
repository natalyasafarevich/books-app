export const LOADING_ON = 'loading/LOADING_ON';
export const LOADING_OFF = 'loading/LOADING_OFF';

export  function loadingOn(){
    return{
        type: LOADING_ON
    }
}
export  function loadingOff(){
    return{
        type: LOADING_OFF
    }
}
