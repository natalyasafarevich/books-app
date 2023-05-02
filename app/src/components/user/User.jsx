import {
	getAuth,
	onAuthStateChanged,
	sendPasswordResetEmail,
} from "firebase/auth";
import "./User.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../store/auth/actions";
import { useEffect, useState } from "react";
// import { Button } from "react-scroll";

export default function User() {
	const auth = getAuth();
	const dispatch = useDispatch();

	const current_user = useSelector((state) => state.auth.user);
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (!user) {
				return;
			}
			const { displayName, email, photoURL } = user;
			dispatch(setCurrentUser(displayName, email, photoURL));
		});
		// setCurrentUser(undefined)
		console.log(current_user);
	}, [onAuthStateChanged]);

	return (
		<div className="user">
			<button className="user__container">
				<p className="user__name">{current_user?.name}</p>
        {console.log(current_user?.avatar)}
        <img src="https://lh3.googleusercontent.com/a/AGNmyxbCsi4PZCkBA6LkKL8vJvjlg9PQA-0qoA_d9L3X=s96-c" />
			</button>
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
