import { useSelector } from "react-redux";
import "./PreviewMobile.scss";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function PreviewMobile() {
	const [book, setBook] = useState({});
	// const params = useParams();
	const favoriteBook = useSelector(
		(state) => state.favorite_books.favoriteBooks
	);
	useEffect(() => {
		console.log(window.innerWidth);
	}, [window.innerWidth]);
	useEffect(() => {
		if (favoriteBook.length !== 0) {
			setBook(favoriteBook[Math.floor(Math.random() * favoriteBook.length)]);
		}
	}, []);
	if (Object.keys(book).length && window.innerWidth < 768) {
		return (
			<>
				{console.log(book)}
				<div className="preview-mobile">
					<div className="preview-mobile__container">
						<p className="preview-mobile__title">Begin reading</p>
						<Link className="preview-mobile__box">
							{(book?.formats["image/jpeg"] === undefined && (
								<div className="preview-mobile__image preview-mobile__undefined"></div>
							)) || (
								<div
									className="preview-mobile__image"
									style={{
										background: `bottom/contain no-repeat url(${book?.formats["image/jpeg"]})`,
									}}></div>
							)}

							<div className="preview-mobile__info">
								<p className="preview-mobile__name">{book.title}</p>
								<p className="preview-mobile__author">{book.authors[0].name}</p>
								{book.subjects.map((item, index) => (
									<p key={index} className="preview-mobile__subjects">
										{item}
									</p>
								))}
							</div>
						</Link>
					</div>
				</div>
			</>
		);
	}
}
