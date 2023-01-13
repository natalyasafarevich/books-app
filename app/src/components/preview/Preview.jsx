import "./Preview.scss";

export function Preview() {
	const infomation = [
		{
			name: "Pages",
			desc: "250pages",
			class: "preview__title",
		},
		{
			name: "Length",
			desc: "10 Hours",
			class: "preview__title",
		},
		{
			name: "Rating:",
			desc: "4.5/5 (305 ratings)",
			class: "preview__title",
		},
	];


	return (
		<div className="preview">
			<div className="preview__container">
				<p className="preview__title">big summer sale</p>
				<div className="text">
					<span className="main-text">
						large collection  of books
						
					</span>
					<span className="additional">
							large collection  of books
						</span>
				</div>

			</div>
		</div>
	);
}
