import { useState } from "react";
import "./Title.scss";

export function Title({ name, className }) {
	const [isActive, setIsActive] = useState(false);

	const handleClicke = (e) => {
		e.preventDefault();
		setIsActive(true);
	};
	// const [isActive, setIsActive] = useState(false);
	return (
		<>
			{isActive && (
				<a href="/" onClick={handleClicke} className={[`title title_active ${className}`]}>
					{name}
				</a>
			)}
				<a href="/" onClick={handleClicke} className={[`title title_active ${className}`]}>
					{name}
				</a>
		</>
	);
}
