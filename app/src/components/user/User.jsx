import {
	getAuth,
	onAuthStateChanged,
	sendPasswordResetEmail,
} from "firebase/auth";
import "./User.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../store/auth/actions";
import { useEffect, useState } from "react";
import Popup from "./popup/Popup";
import avatar from '../../img/user-avatar.svg'
// import { Button } from "react-scroll";

export default function User() {
	const auth = getAuth();
	const dispatch = useDispatch();
	const isLogIn = useSelector((state) => state.auth.isLogin);

	const current_user = useSelector((state) => state.auth.user);
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (!user) {
				return;
			}
			console.log(user)
			const { displayName, email, photoURL } = user;

			dispatch(setCurrentUser(displayName, email, photoURL));
		});
		// setCurrentUser(undefined)
		console.log(current_user);
	}, [isLogIn]);

	return (
		<div className="inner">
			<div className="user">
				<button className="user__container">
					<p className="user__name">{current_user?.name}</p>
					<div
						className="user__avatar"
						style={{
							background: `center/cover no-repeat url(${current_user?.avatar || `${avatar}`} )`,
						}}></div>
				</button>
			</div>
			<Popup />
		</div>
	);
}
// export default function User() {

//   const [email, setEmail] = useState('')
//   const auth = getAuth();

//   const triggerResetEmail = async () => {
//     await sendPasswordResetEmail(auth, 'natalyasafarevich@gmail.com');
//     console.log("Password reset email sent")
//   }

//   return (
//     <div className="resetPassword-main">
// <input type="text" />
//       <button className="resetBtn" type="button" onClick={triggerResetEmail}>Ripristina password</button>

//     </div>
//   )
// }
