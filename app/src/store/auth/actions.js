export const SET_CURRENT_USER = 'auth/SET_CURRENT_USER';


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
