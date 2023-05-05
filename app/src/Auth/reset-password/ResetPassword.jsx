import {
	getAuth,
	onAuthStateChanged,
	sendPasswordResetEmail,
} from "firebase/auth";
import "./ResetPassword.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { validateEmail } from "../../helper/validationEmail";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ResetPassword() {
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState(false);

	const auth = getAuth();

	const resetPassword = () => {
		let email = document.querySelector("#email");

		if (!validateEmail(email.value)) {
			document.querySelector(".form__box").classList.add("_error");
			setErrorMessage("Please enter the correct email");
			return;
		}
		sendPasswordResetEmail(auth, email.value)
			.then((response) => {
				document.querySelector(".form__box").classList.remove("_error");
				setErrorMessage("");
				setSuccessMessage(true);
			})
			.catch((error) => {
				document.querySelector(".form__box").classList.add("_error");
				setErrorMessage("User is not found");
			});
	};
	return (
		<div className="reset-password">
			{!successMessage ? (
				<div className="reset-password__container">
					<p className="reset-password__title">Reset your password?</p>
					<p className="reset-password__desc">
						Enter your email address to get a secure password recovery link.
					</p>

					<div className="form ">
						<div className="form__box" data={errorMessage}>
							<input
								className="form__input"
								type="text"
								id="email"
								placeholder="Write your email"
							/>
						</div>
						<button type="submit" className="form__submit" onClick={resetPassword}>
							Reset password
						</button>
					</div>
				</div>
			) : (
				<div className="reset-password__box">
					<p className="reset-password__title">
						Password reset message sent to your email
					</p>
					<Link className="reset-password__link" to={"/"}>
					<ArrowBackIcon/>	return to the home
					</Link>
				</div>
			)}
		</div>
	);
}
