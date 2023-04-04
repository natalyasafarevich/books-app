import "./Switcher.scss";

export default function Switcher() {
	return (
		<div className="mobile-menu">
				<label className="switch">
					<input type="checkbox" />
					<span className="slider round"></span>
				</label>
			</div>
	);
}
