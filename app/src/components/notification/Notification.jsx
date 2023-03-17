import { useEffect } from "react";

import { useSelector } from "react-redux";
import { notificationEvent } from "../../helper/events";
import "./Notification.scss";

export default function Notification() {
	const text = useSelector((state) => state.note);

	useEffect(() => {
		if ((!text.hidden && text.remove) || (text.hidden && text.remove)) {
			notificationEvent();
		}
	}, [text]);

	if (!text.hidden && text.remove) {
		return (
			<div className="notification ">
				<div className="notification__container">
					<div className="notification__icon notification__icon_success"> </div>
					<p className="notification__desc">
						Book: <i>"{text.text}"</i>
						<span> is added in favorite</span>
					</p>
				</div>
			</div>
		);
	}
	if (text.hidden && text.remove) {
		return (
			<div className="notification ">
				<div className="notification__container">
					<div className="notification__icon notification__icon_warning"> </div>
					<p className="notification__desc">
						Book: <i>"{text.text}"</i>
						<span> is delete in favorite</span>
					</p>
				</div>
			</div>
		);
	}
}
