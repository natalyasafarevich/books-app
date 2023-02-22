import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import Load from "../../load/Load";
import Error from "../../error/Error";
import { addFavoriets, removeFavoriets, setCurrentBook } from "../../../store/books/actions";
import LanguageIcon from "@mui/icons-material/Language";
import SubjectIcon from "@mui/icons-material/Subject";

import "./BookDescription.scss";
export function BookDescription() {
	const [rating, setRating] = useState({});
	const [pdfVersion, setPdfVersion] = useState([]);

	const params = useParams();

	const book = useSelector((state) => state.books.currentBook);
	const favoriteBook = useSelector((state) => state.books.favoriteBooks);
	// console.log(book.formats["image/jpeg"]);
	const { title, bookshelves, authors, translators, languages, subjects } = book;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setCurrentBook(params.isbn));
	}, [params]);
	const isFavorite = (e) => {
	
		console.log(favoriteBook);
	};
	if (Object.keys(book).length) {
		return (
			<div className="desc-book">
				<Load />
				{console.log(book)}
				<div className="desc-book__container">
					<div
						className="desc-book__img"
						style={{ backgroundImage: `url(${book.formats["image/jpeg"]})` }}></div>
					<div className="desc-book__info">
						<p className="desc-book__title">{title}</p>
						<div className="desc-book__autors">
							<span className="desc-book__span">By</span>
							{authors.map((item, index) => (
								<Link to="/search" key={index} className="desc-book__name">
									{item.name}
									<span className="desc-book__years">
										({item.birth_year} - {item.death_year})
									</span>
								</Link>
							))}
						</div>
						<div className="desc-book__bookshelves">
							Bookshelves:
							{bookshelves.map((item, i) => (
								<p key={i} className="desc-book__desc">
									{item}
								</p>
							))}
						</div>
						<div className="desc-book__translators">
							translators:
							{(translators.length &&
								translators.map((item, i) => <p key={i}>{item}</p>)) || (
								<span>absent</span>
							)}
						</div>
						<div className="desc-book__languages">
							<span>
								<LanguageIcon />
								languages
							</span>
							{languages.map((item, i) => (
								<p key={i} to={`search/${book.id}`}>
									{item}
								</p>
							))}
						</div>
						<div className="desc-book__subjects">
							<span>
								<SubjectIcon />
								Subjects:
							</span>
							<div className="desc-book__subjects-info">
								{subjects.map((item, i) => (
									<p key={i} to={`search/${book.id}`}>
										{item}
									</p>
								))}
							</div>
						</div>
						<button onClick={isFavorite} className="add-favotive">
							Add to cart
						</button>
					</div>
				</div>
			</div>
		);
	}
}
