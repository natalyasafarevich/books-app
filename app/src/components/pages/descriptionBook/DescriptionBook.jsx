import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./DescriptionBook.scss";

import { Rating } from "@mui/material";
import { getCurrentBook } from "../../../api/getBooks";
import SimilarBooks from "../../similarBooks/SimilarBooks";

export function DescriptionBook() {
	const [dataItBook, setDataItBook] = useState({});
	const [rating, setRating] = useState({});
	const [pdf, setPdf] = useState([]);

	const params = useParams();

	useEffect(() => {
		async function getData() {
			const response = await getCurrentBook(params.isbn);
			setDataItBook(response.data);
			setRating(response.data.rating);
			// console.log(response.data.pdf);
			setPdf(response.data.pdf || null);
		}
		getData();
	}, []);

	return (
		<div className="desc-book">
			<p className="desc-book__title">{dataItBook.title}</p>
			<div className="desc-book__container">
				<div className="desc-book__preview">
					<div className="desc-book__box">
						<img className="desc-book__img" src={dataItBook.image} alt="book img" />
					</div>
					<div className="desc-book__rating">
						{<Rating name="half-rating-read" value={Number(rating)} readOnly />}
					</div>
					<div className="desc-book__btns">
						<a
							href={`https://www.amazon.com/gp/reader/${dataItBook.isbn10}/?tag=isbndir-20`}
							className="desc-book__btn desc-book__btn_buy">
							buy
						</a>
						{(pdf && (
							<>
								<a
									href={Object.values(pdf)[0]}
									className="desc-book__btn desc-book__btn_preview">
									prewiev
								</a>
							</>
						)) }
					</div>
				</div>

				<div className="desc-book__info">
					<p className="desc-book__desc-text">Information</p>

					<p className="desc-book__text">
						<span>price</span> {dataItBook.price}
					</p>

					<p className="desc-book__text">
						<span>authors</span> {dataItBook.authors}
					</p>
					<p className="desc-book__text">
						<span>Published</span> {dataItBook.year}
					</p>
					<p className="desc-book__text">
						<span>Pages</span> {dataItBook.pages}
					</p>
					<p className="desc-book__text">
						<span>Language</span> {dataItBook.language}
					</p>
					<p className="desc-book__text">
						<span>publisher</span> {dataItBook.publisher}
					</p>
					<p className="desc-book__desc-text">Description</p>
					<p className="desc-book__desc">{dataItBook.desc}</p>
				</div>
			</div>
			<SimilarBooks/>
		</div>
	);
}
