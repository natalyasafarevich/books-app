import "./Categories.scss";
import React, { useEffect, useState } from "react";
import { Title } from "../../title/Title";
import { getAllCategory, getCurrentCategory } from "../../../api/getBooks";
import { Card } from ".././card/Card";

export function Categories({ books }) {
	const [title, getTitle] = useState([]);
	const [book, getBook] = useState([]);

	useEffect(() => {
		async function gets() {
			const response = await getCurrentCategory(books.list_name);
			const data = response.data.results;
			getTitle(data.list_name.toLowerCase());
			getBook(data.books.slice(0, 3));
		}
		gets();
	}, []);

	return (
		<div className="categories">
			{<Title name={title} />}

			<div className="categories__content">
				{book.map((item, index) => (
					<Card key={index} book={item} />
				))}
			</div>
		</div>
	);
}
