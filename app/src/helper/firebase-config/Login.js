import {nanoid} from "nanoid";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import {validateEmail} from "../validationEmail";
import {writeUserData} from "../../Auth/Auth";
import { logInUser, logOutUser, setCurrentUser } from "../../store/auth/actions";


export const login = (setErrorMessage, navigate, dispatch) => {
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const confirm_password = document.querySelector("#confirm-password");
  const name = document.querySelector("#name");

  if (!validateEmail(email.value)) {
    setErrorMessage("Enter your email address or check if it is correct.");
    // Enter your email address or check if it is correct.
    email.closest(".form__box").classList.add("_error");
  } else {
    email.closest(".form__box").classList.remove("_error");
  }

  // if (name.value.length === 0) {
  // name.closest(".form__box").classList.add("_error");
  // } else {
  // name.closest(".form__box").classList.remove("_error");
  // }

  // if (password.value !== confirm_password.value) {
  // document.querySelectorAll(".form__password").forEach((item) => {
  //     item.classList.add("_error");
  // });
  // return;
  // }

  // if (password.value === confirm_password.value) {
  document.querySelectorAll(".form__password").forEach((item) => {
    item.classList.remove("_error");
  });
  firebase.auth().signInWithEmailAndPassword(email.value, password.value).then((e) => {
    console.log(e)
    // writeUserData(nanoid(),  email.value, "email");

    dispatch(logInUser());
    navigate('/')
  }).catch((e) => {
    console.log(e)
    email.closest(".form__box").classList.add("_error");
    setErrorMessage("Email already in use");
  });
  // const db = getDatabase();
  // const refe = ref(db, "/users/");

  // onValue(refe, (snapshot) => {
  // const data = snapshot.val();
  // console.log(data);
  // });
  // }
};
