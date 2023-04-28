import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./Registration.scss";
import { useState } from "react";

export default function Registration() {
	const [isVisible, setIsVisible] = useState(false);

	const handleClicke = (e) => {
		const { target } = e;
		let icon = target.closest(".icon-eye").nextElementSibling;

		if (icon.getAttribute("type") === "password") {
			icon.setAttribute("type", "text");
			return
		}
		icon.setAttribute("type", "password");
		// setIsVisible(!isVisible);
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
									You can <Link to={"/login"}> Login here !</Link>{" "}
								</span>
							</p>
							<input
								className="form__input"
								type="text"
								id="name"
								placeholder="Write your name"
							/>
							<input
								className="form__input"
								type="text"
								id="name"
								placeholder="Write your name"
							/>
							<div className="form__password">
								<label className="icon-eye">
									{isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
								</label>
								<input
									className="form__input"
									type="password"
									id="password"
									placeholder="Password"
								/>
							</div>
							<div className="form__password">
								<label className="icon-eye" onClick={handleClicke}>
									{isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
								</label>
								<input
									className="form__input"
									type="password"
									id="confirm-password"
									placeholder="Confrim Password"
								/>
							</div>

							<button type="submit" className="form__submit">
								Register
							</button>
						</div>
						<p className="sign-up__marker">or continue with</p>
						<div className="sign-up__social">
							<p>social</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
