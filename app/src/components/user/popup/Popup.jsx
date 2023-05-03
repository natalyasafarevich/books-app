import firebase from "firebase/compat/app";
import {
	getAuth,
	RecaptchaVerifier,
	signInWithPhoneNumber,
	signInWithPopup,
	FacebookAuthProvider,
	GoogleAuthProvider,
} from "firebase/auth";

import "firebase/compat/firestore";
import "firebase/compat/auth";
import "./Popup.scss";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../../store/auth/actions";

export default function Popup() {

  const dispatch = useDispatch()
	const logOut = (e) => {
		const auth = getAuth();
		firebase
			.auth()
			.signOut()
			.then(
				function () {
					dispatch(logOutUser())
					// console.log('Signed Out');
				},
				function (error) {
					// console.error('Sign Out Error', error);
				}
			);
	};
	return (
		<div className="popup">
			<div className="popup__container">
				<button type="button" className="popup__button settings">
					settings
				</button>
				<button type="button" onClick={logOut} className="popup__button log-out">
					log out
					<LogoutIcon />
				</button>
			</div>
		</div>
	);
}
