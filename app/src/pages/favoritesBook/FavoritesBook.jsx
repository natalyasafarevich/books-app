import { useSelector } from "react-redux";
import BookCard from "../../components/bookCard/BookCard";
import "./FavoritesBook.scss";

export default function FavoritesBook() {
	const favoriteBooks = useSelector(
		(state) => state.favorite_books.favoriteBooks
	);

	return (
		<div className="wrapper">
			<div className="favorite-books">
				<p className="favorite-books__title title"> My Library</p>

				<div className="favorite-books__container category">
					{favoriteBooks.map((book, index) => (
						<BookCard book={book} key={index} />
					))}
				</div>
			</div>
		</div>
	);
}
