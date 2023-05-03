export const SET_CURRENT_USER = 'auth/SET_CURRENT_USER';
export const LOG_OUT_USER = 'auth/LOG_OUT_USER';
export const LOG_IN_USER = 'auth/LOG_IN_USER';


export function setCurrentUser(name, email, avatar) {
  return {
    type: SET_CURRENT_USER,
    data: {
      name,
      email,
      avatar
    }
  }
}

export function logInUser() {
  return {type: LOG_IN_USER}
}

export function logOutUser() {
  return {type: LOG_OUT_USER}
}
