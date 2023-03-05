export const SET_PAGINATION = 'pogination/SET_PAGINATION';
export const GET_PAGINATION = 'pogination/GET_PAGINATION';
export const GET_PAGINATION_COUNT = 'pogination/GET_PAGINATION_COUNT';

export const RESET_PAGE = 'topic/RESET_PAGE';


export function setResetPage() {
  return {type: RESET_PAGE, }
}



export function setPaginationCount(count) {
  return {type: GET_PAGINATION_COUNT, count}
}

export function setPaginationNumber(number) {
  return {type: SET_PAGINATION, number}
}
export function getPaginationNumber() {
  return {type: GET_PAGINATION}
}
