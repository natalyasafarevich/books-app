import "./Card.scss";

export function Card({ book }) {
	return (
		<div className="category-card">
			<div className="category-card__container">
				<img className="category-card__img" src={book.book_image} alt="img" />
				<div className="category-card__info">
					<p className="category-card__title">{book.title}</p>
					{/* <p className="category-card__price">$ {book.price }USD</p> */}
					<p className="category-card__desc">{book.description}</p>
					<p className="category-card__category">	{book.author}</p>
					<button className="category-card__button">Order Now</button>
				</div>
			</div>
		</div>
	);
}
