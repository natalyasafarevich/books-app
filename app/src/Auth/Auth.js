// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getDatabase, ref, set} from "firebase/database";

import {getAnalytics} from "firebase/analytics";
import firebase from "firebase/compat/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider
} from "firebase/auth";

import "firebase/compat/firestore";
import "firebase/compat/auth";
import {nanoid} from "nanoid";
import { logInUser } from "../store/auth/actions";


// google
export default function singUpGoogle(dispatch) {

  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");
  return firebase.auth().signInWithPopup(provider).then((response) => {
    dispatch(logInUser());
    if (response.additionalUserInfo.isNewUser) {
      const {email, name, picture} = response.additionalUserInfo.profile;
      writeUserData(nanoid(), name, email, 'google');
      // dispatch(logInUser());
      // write current id
    }
  }).catch(error => {
    console.log(error)
  });
}

// facebook

export const singUpFacebook = (dispatch) => {
  const auth = getAuth();
  let provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('email');
  signInWithPopup(auth, provider).then((response) => {
    dispatch(logInUser());

    console.log(response)
  }).catch(error => {
    console.log(error)
  });;

}

export const singUpGitHub = (dispatch) => { // With popup.
  var provider = new firebase.auth.GithubAuthProvider();
  provider.addScope("repo");
  firebase.auth().signInWithPopup(provider).then(()=> dispatch(logInUser()))
};
// add new data
export function writeUserData(id, name, email, authWith) {
  const db = getDatabase();
  
  set(ref(db, 'users/' + id), {
    id,
    displayName : name,
    email: email,
    authWith,

    // profile_picture : imageUrl
  });
}
