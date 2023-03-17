import React, { useState } from "react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import BookCard from "../bookCard/BookCard";
import Error from "../error/Error";
import Label from "../label/Label";
import Load from "../load/Load";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Books.scss";

SwiperCore.use([Pagination]);

function Books({ books, info }) {
	const [swiper, setSwiper] = useState(null);
	return (
		<div className="books-container">
			<div className="books-container__box">
				<Label info={info} />
			</div>
			<Error />
			<Load />
			<div className="books-container__row">
				<Swiper
					onSwiper={(swiper) => {
						setSwiper(swiper);
					}}
					slidesPerView={4}
					modules={[Navigation]}
					className="book-slider">
					{books.length &&
						books.map((book, index) => (
							<SwiperSlide  key={index}>
								<BookCard key={index} book={book} />
							</SwiperSlide>
						))}
				</Swiper>

				<div className="swiper-container">
						<ChevronLeftOutlinedIcon
							className="swiper-button"
							onClick={() => {
								swiper.slidePrev();
							}}
						/>
					<ChevronRightOutlinedIcon
						className="swiper-button"
						onClick={() => {
							swiper.slideNext();
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default Books;
