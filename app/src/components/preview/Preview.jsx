import { Link } from "react-router-dom";
import "./Preview.scss";

export function Preview() {
	const link = [
		{
			desc: "get new knowledge about Windows",
			class: "preview_link preview_link_violet",
			url: "/books/windows",
		},
		{
			desc: "top Angular books ",
			class: "preview_link preview_link_pink",
			url: "/books/angular",
		},
	];

	return (
		<div className="preview">
			<div className="preview__container">
				<div className="preview__text">
					<p className="preview__title">
						Read <span>Books </span> Online
					</p>
					<p className="preview__desc">Let you read books online without leaving website</p>
				</div>
				<div className="preview__image"></div>
			</div>
		</div>
	);
}
