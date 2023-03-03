import { Link } from "react-router-dom";
import "./Preview.scss";

export function Preview() {
	return (
		<div className="preview">
			<div className="preview__container">
				<div className="preview__text">
					<p className="preview__title">
						Read <span>Books </span> Online
					</p>
					<p className="preview__desc">
						Let you read books online without leaving website
					</p>
				</div>
				<div className="preview__image"></div>
			</div>
		</div>
	);
}
