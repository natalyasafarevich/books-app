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
			{link.map((item, index) => (
				<Link key={index} to={item.url} className={item.class}>
					<span>{item.desc}</span>
				</Link>
			))}
			<div className="preview__container">
				<p className="preview__title">big summer sale</p>
				<div className="text">
					<span className="main-text">large collection of books</span>
					<span className="additional">large collection of books</span>
				</div>
			</div>
		</div>
	);
}
