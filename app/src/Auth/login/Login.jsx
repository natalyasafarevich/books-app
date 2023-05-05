import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { validateEmail } from "../../helper/validationEmail";
import { singUpFacebook, singUpGitHub, writeUserData } from "../Auth";
import singUpGoogle from "../Auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import "./Registration.scss";
import { useDispatch, useSelector } from "react-redux";
import { handleSubmit } from "../../helper/firebase-config/handleSubmit";
import { login } from "../../helper/firebase-config/Login";

export default function Login() {
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

	return (
		<div className="wrapper">
			<div className="main">
				<div className="sign-up">
					<div className="sign-up__row">
						<div className="sign-up__form form">
							<p className="form__title">Sign in</p>
							<p className="form__desc">
								If you already have an account register
								<span>
									You can <Link to={"/registration"}> Register here !</Link>{" "}
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

							<button
								type="submit"
								className="form__submit"
								onClick={() => login(setErrorMessage, navigate, dispatch)}>
								Login
							</button>
							<Link className="form__reset-password" to={"/reset-password"}>Forgot password ? </Link>
							<p className="sign-up__marker">or continue with</p>
							<div className="sign-up__social">
								<button
									className="sign-up__icon google"
									onClick={() => singUpGoogle(dispatch)}></button>

								<button
									className="sign-up__icon facebook"
									onClick={() => singUpFacebook(dispatch)}></button>
								<button
									className="sign-up__icon github"
									onClick={() => singUpGitHub(dispatch)}></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
