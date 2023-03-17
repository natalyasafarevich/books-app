import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setNotificationHidden } from "../../store/notification/actions";
import "./Notification.scss";

export default function Notification() {
	const text = useSelector((state) => state.note);

	useEffect(() => {
		if (!text.hidden) {
			document.querySelector(".notification").classList.remove("animation-hidden");
			document.querySelector(".notification").classList.add("animation-open");

			const timer = setTimeout(() => {
				document.querySelector(".notification").classList.remove("animation-open");
				document.querySelector(".notification").classList.add("animation-hidden");
			}, 2000);
			return () => clearTimeout(timer);
		}
		console.log(text.hidden);
	}, [text]);

	return (
		<div className="notification ">
			<div className="notification__container">
				<div className="notification__icon"> </div>
				<p className="notification__desc">
					Book: <i>"{text.text}"</i>
					<span> is added in favorite</span>
				</p>
			</div>
		</div>
	);
}
