import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { validateEmail } from "../../helper/validationEmail";
import { singUpFacebook, singUpGitHub, writeUserData } from "../../Auth/Auth";
import singUpGoogle from "../../Auth/Auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";


import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "./Registration.scss";
import { useDispatch, useSelector } from "react-redux";
import { handleSubmit } from "../../helper/firebase-config/handleSubmit";


export default function Registration() {
	const [errorMessage, setErrorMessage] = useState("");
	const current_id = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const navigate = useNavigate();



	const handleClicke = (e) => {
		const { target } = e;
		let icon = target.closest(".icon-eye").nextElementSibling;
		target.closest(".icon-eye").classList.toggle("active");

		if (icon.getAttribute("type") === "password") {
			icon.setAttribute("type", "text");
			return;
		}
		icon.setAttribute("type", "password");
	};

	// validation
	// const handleSubmit = () => {
	// 	const email = document.querySelector("#email");
	// 	const password = document.querySelector("#password");
	// 	const confirm_password = document.querySelector("#confirm-password");
	// 	const name = document.querySelector("#name");

	// 	if (!validateEmail(email.value)) {
	// 		setErrorMessage("Enter your email address or check if it is correct.");
	// 		// Enter your email address or check if it is correct.
	// 		email.closest(".form__box").classList.add("_error");
	// 	} else {
	// 		email.closest(".form__box").classList.remove("_error");
	// 	}

	// 	if (name.value.length === 0) {
	// 		name.closest(".form__box").classList.add("_error");
	// 	} else {
	// 		name.closest(".form__box").classList.remove("_error");
	// 	}

	// 	if (password.value !== confirm_password.value) {
	// 		document.querySelectorAll(".form__password").forEach((item) => {
	// 			item.classList.add("_error");
	// 		});
	// 		return;
	// 	}

	// 	if (password.value === confirm_password.value) {
	// 		document.querySelectorAll(".form__password").forEach((item) => {
	// 			item.classList.remove("_error");
	// 		});
	// 		firebase
	// 			.auth()
	// 			.createUserWithEmailAndPassword(email.value, password.value)
	// 			.then(() => {
	// 				// dispatch(setCurrentId(nanoid()));

	// 				writeUserData(nanoid(), name.value, email.value, "email");
	// 				navigate('/')
	// 			})
	// 			.catch((e) => {
	// 				email.closest(".form__box").classList.add("_error");
	// 				setErrorMessage("Email already in use");
	// 			});
	// 		// const db = getDatabase();
	// 		// const refe = ref(db, "/users/");

	// 		// onValue(refe, (snapshot) => {
	// 		// 	const data = snapshot.val();
	// 		// 	console.log(data);
	// 		// });
	// 	}
	// };

	// 	let provider = new firebase.auth.GoogleAuthProvider();
	// 	provider.addScope("profile");
	// 	provider.addScope("email");
	// 	firebase
	// 		.auth()
	// 		.signInWithPopup(provider)
	// 		.then((e) =>{console.log(e)});
	// };

	// const singUpFacebook = ()=>{
	// 	let provider = new firebase.auth.FacebookAuthProvider();
	// 	provider.addScope('email');
	// 	firebase.auth().signInWithPopup(provider).then(function(result) {
	// 		// This gives you a Facebook Access Token.
	// 		var token = result.credential.accessToken;
	// 		// The signed-in user info.
	// 		var user = result.user;

	// 	});
	// }
	// const phoneNumber = getPhoneNumberFromUserInput();
	// const appVerifier = window.recaptchaVerifier;

	// const test = () => {
	// 	const database = getDatabase();
	// 	const db = getDatabase();

	// 	// var playersRef = firebase.database().ref("players/");
	// 	set(ref(db, "name"), {
	// 		username: "name",
	// 		email: "email",
	// 		profile_picture: "imageUrl",
	// 	});

	// 	// playersRef.set ({
	// 	// 	John: {
	// 	// 		 number: 1,
	// 	// 		 age: 30
	// 	// 	},

	// 	// 	Amanda: {
	// 	// 		 number: 2,
	// 	// 		 age: 20
	// 	// 	}
	// 	//  });
	// };

	// const singUpGitHub = () => {
	// 	// With popup.
	// 	var provider = new firebase.auth.GithubAuthProvider();
	// 	provider.addScope("repo");
	// 	firebase.auth().signInWithPopup(provider);
	// };
	return (
		<div className="wrapper">
			<div className="main">
				<div className="sign-up">
					<div className="sign-up__row">
						<div className="sign-up__form form">
							<p className="form__title">Registration</p>
							<p className="form__desc">
								If you already have an account register
								<span>
									You can <Link to={"/login"}> Login here !</Link>{" "}
								</span>
							</p>
							<div className="form__box" data={errorMessage}>
								<input
									className="form__input"
									type="text"
									id="email"
									placeholder="Write your email"
								/>
							</div>
							{/* {console.log(current_id)} */}
							<div className="form__box" data={"Plaese enter your name"}>
								<input
									className="form__input"
									type="text"
									id="name"
									placeholder="Write your name"
								/>
							</div>
							<div
								className="form__password"
								data={"The passwords do not and then retype the password"}>
								<label className="icon-eye" onClick={handleClicke}></label>
								<input
									className="form__input"
									type="password"
									id="password"
									placeholder="Password"
								/>
							</div>
							<div className="form__password">
								<label className="icon-eye " onClick={handleClicke}></label>
								<input
									className="form__input"
									type="password"
									id="confirm-password"
									placeholder="Confrim Password"
								/>
							</div>
							<button type="submit" className="form__submit" 	onClick={() => handleSubmit(setErrorMessage, navigate, dispatch)}>
								Register
							</button>
							<p className="sign-up__marker">or continue with</p>
							<div className="sign-up__social">
								<button
									className="sign-up__icon google"
									onClick={() => singUpGoogle()}></button>

								<button
									className="sign-up__icon facebook"
									onClick={() => singUpFacebook()}></button>
								<button
									className="sign-up__icon github"
									onClick={() => singUpGitHub()}></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
