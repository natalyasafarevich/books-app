import "./Preview.scss";

export function Preview() {
	const link = [
		{
			desc: "Change old book on new",
			class: "preview_link preview_link_violet",
			url: "/book/history",
		},
		{
			desc: "top 100 books 2019",
			class: "preview_link preview_link_pink",
			url: "/book/best-series",
		},
	];

	return (
		<div className="preview">
			{link.map((item, index) => (
				<a key={index} href={item.url} className={item.class}>
					<span>{item.desc}</span>
				</a>
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
