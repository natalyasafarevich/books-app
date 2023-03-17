import "./Notification.scss";

export default function Notification({book, action}) {
	return (
		<div className="notification">
			<div className="notification__container">
		
				<p className="notification__desc">
					Book: <i>"{book}"</i>
					<span>  is added in favorite</span>
				</p>
			</div>
		</div>
	);
}
