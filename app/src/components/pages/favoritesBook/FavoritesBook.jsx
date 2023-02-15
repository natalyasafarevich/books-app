import { useSelector } from "react-redux";
import BookCard from "../../bookCard/bookCard";
import "./FavoritesBook.scss";

export default function FavoritesBook() {
	const favoriteBooks = useSelector((state) => state.books.favoriteBooks);

	// console.log(favoriteBooks);
	return (
		<div className="favorite-books">
			<p className="favorite-books__title title"> favorite books</p>
			
			<div className="favorite-books__container category">
				{favoriteBooks.map((book, index) => (
					<BookCard book={book}  key={index}/>
				))}
			</div>
		</div>
	);
}
