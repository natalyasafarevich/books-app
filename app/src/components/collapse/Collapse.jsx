import { useSelector } from "react-redux";
import "./Collapse.scss";

export default function Collapse() {
	const book = useSelector((state) => state.books.currentBook);
	const handleClick = (e) => {
		document.querySelectorAll(".collapse__title").forEach((item) => {
			item.classList.remove("active");
		});
		if (e.target.classList.contains("collapse__title")) {
			e.target.classList.add("active");
			const name = e.target.getAttribute("data-name");
			document.querySelectorAll(".collapse__item").forEach((item) => {
				item.classList.remove("active");
				if (item.getAttribute("data-info") === name) {
					item.classList.add("active");
				}
			});
		}
	};
	return (
		<div className="desc-book__collapse collapse">
			<div className="collapse__row" onClick={handleClick}>
				<p className="collapse__title active" data-name="read">
					Read Book
				</p>
				<p className="collapse__title" data-name="details">
					Book Details
				</p>
			</div>
			<div className="collapse__row ">
				<div className="collapse__item  active" data-info="read">
					<p className="collapse__name h4">Download</p>
					<div className="collapse__flex">
						<a className="collapse__link" href={book.formats["application/epub+zip"]}>
							zip
						</a>
						<a className="collapse__link" href={book.formats["application/epub+zip"]}>
							epub
						</a>
						<a
							className="collapse__link"
							href={
								book.formats["text/plain; charset=utf-8"] || book.formats["text/plain"]
							}>
							txt
						</a>
						<a
							className="collapse__link"
							href={book.formats["text/html"]}
							target="_blank">
							Read this book online
						</a>
					</div>
				</div>
				<div className="collapse__item" data-info="details">
					<p className="collapse__name h4"> Book information</p>
					<div className="collapse__box">
						<div className="collapse__info">
							<p>
								book id
								<span>{book.id}</span>
							</p>
							<p>
								Media Type
								<span>{book.media_type}</span>
							</p>
						</div>
						<div className="collapse__info">
							<p>
								copyright
								<span>{book.copyright}</span>
							</p>
							<p>
								download count:
								<span>{book.download_count}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
