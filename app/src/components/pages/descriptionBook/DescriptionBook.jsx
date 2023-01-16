import { useParams } from "react-router-dom";
import "./DescriptionBook.scss";
import {Rating} from "@mui/material";
// import Stack from "@mui/material/Stack";
import {
	getBookFromItBook,
	getBookFromOpenLibrary,
} from "../../../api/getBooks";
import { useEffect } from "react";
import { useState } from "react";

export function DescriptionBook() {
	const [dataItBook, setDataItBook] = useState({});
	const [rating, setRating] = useState({});

	const params = useParams();
	// console.log(params);
	useEffect(() => {
		async function getData() {
			const response = await getBookFromItBook(params.isbn);
			setDataItBook(response.data);
			setRating(response.data.rating)
			// console.log(response.data.rating)
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
						{
							 <Rating
							name="half-rating-read"
							value={Number(rating) }
							// precision={0.5}
							readOnly
						/>
						}
						
					</div>
					<div className="desc-book__btns">
						<a href="/" className="desc-book__btn desc-book__btn_buy">
							buy
						</a>
						<a href="/" className="desc-book__btn desc-book__btn_preview">
							preview
						</a>
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
					<p className="desc-book__desc">
						{dataItBook.desc}
						{/* {console.log(dataItBook.desc)} */}
					</p>
				</div>
			</div>
		</div>
	);
}
