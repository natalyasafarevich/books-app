import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import Load from "../../load/Load";
import Error from "../../error/Error";
import { setCurrentBook } from "../../../store/books/actions";

import "./BookDescription.scss";
export function BookDescription() {
	const [rating, setRating] = useState({});
	const [pdfVersion, setPdfVersion] = useState([]);

	const params = useParams();
	const book = useSelector((state) => state.books.currentBook);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setCurrentBook(params.isbn));
		setRating(book.rating);
		setPdfVersion(book.pdf);
	}, []);

	return (
		<div className="desc-book">
			<Load />
			<p className="desc-book__title">{book.title}</p>
			<div className="desc-book__container">
				<div className="desc-book__preview">
					<div className="desc-book__box">
						<img className="desc-book__img" src={book.image} alt="book img" />
					</div>
					<div className="desc-book__rating">
						{<Rating name="half-rating-read" value={Number(rating)} readOnly />}
					</div>
					<div className="desc-book__btns">
						<a
							href={`https://www.amazon.com/gp/reader/${book.isbn10}/?tag=isbndir-20`}
							className="desc-book__btn desc-book__btn_buy">
							buy
						</a>
						{pdfVersion && (
							<>
								<a
									href={Object.values(pdfVersion)[0]}
									className="desc-book__btn desc-book__btn_preview">
									prewiev
								</a>
							</>
						)}
					</div>
				</div>

				<div className="desc-book__info">
					<p className="desc-book__desc-text">Information</p>
					<p className="desc-book__text">
						<span>price</span> {book.price}
					</p>

					<p className="desc-book__text">
						<span>authors</span> {book.authors}
					</p>
					<p className="desc-book__text">
						<span>Published</span> {book.year}
					</p>
					<p className="desc-book__text">
						<span>Pages</span> {book.pages}
					</p>
					<p className="desc-book__text">
						<span>Language</span> {book.language}
					</p>
					<p className="desc-book__text">
						<span>publisher</span> {book.publisher}
					</p>
					<p className="desc-book__desc-text">Description</p>
					<p className="desc-book__desc">{book.desc}</p>
				</div>
			</div>
		</div>
	);
}
